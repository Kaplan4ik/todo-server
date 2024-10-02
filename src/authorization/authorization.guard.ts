import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { expressjwt } from 'express-jwt';
import { decode } from 'jsonwebtoken';
import { expressJwtSecret } from 'jwks-rsa';
import { promisify } from 'util';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  private readonly AUTH0_AUDIENCE: string;
  private readonly AUTH0_DOMAIN: string;

  constructor(private readonly configService: ConfigService) {
    this.AUTH0_AUDIENCE = this.configService.get<string>('AUTH0_AUDIENCE');
    this.AUTH0_DOMAIN = this.configService.get<string>('AUTH0_DOMAIN');
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();

    const checkJwt = promisify(
      expressjwt({
        secret: expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: `${this.AUTH0_DOMAIN}.well-known/jwks.json`,
        }) as any,
        audience: this.AUTH0_AUDIENCE,
        issuer: this.AUTH0_DOMAIN,
        algorithms: ['RS256'],
      }),
    );

    try {
      await checkJwt(req, res);
      const authHeader = req.headers.authorization;

      if (!authHeader?.startsWith('Bearer ')) {
        throw new UnauthorizedException('No JWT token found');
      }

      const token = authHeader.split(' ')[1];
      const decodedToken = decode(token) as any;

      if (!decodedToken) {
        throw new UnauthorizedException('Invalid JWT token');
      }

      req.userId = decodedToken.sub.split('|')[1];
      return true;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}

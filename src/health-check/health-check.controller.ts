import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('health-check')
export class HealthCheckController {
  constructor(private configService: ConfigService) {}
  @Get()
  async healthCheck(): Promise<string> {
    const test = this.configService.get<string>('AUTH0_DOMAIN');
    return `Health check is OK!!!! - ${test}`;
  }
}

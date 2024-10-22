import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthorizationModule } from './authorization/authorization.module';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';
import { HealthCheckModule } from './health-check/health-check.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    //TODO: Uncomment after deployment!

    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (configService: ConfigService) => ({
    //     type: 'postgres',
    //     host: configService.get<string>('DB_HOST'),
    //     username: configService.get<string>('DB_USERNAME'),
    //     password: configService.get<string>('DB_PASSWORD'),
    //     database: configService.get<string>('DB_DATABASE'),
    //     port: configService.get<number>('DB_PORT'),
    //     entities: [__dirname + '/**/*.entity{.ts}'],
    //     // TODO: Remove after deployment
    //     synchronize: true,
    //     autoLoadEntities: true,
    //     logging: true,
    //   }),
    // }),
    TodoModule,
    AuthorizationModule,
    UserModule,
    HealthCheckModule,
  ],
})
export class AppModule {}

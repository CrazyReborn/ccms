import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColoniesModule } from './colonies/colonies.module';
import { CatsModule } from './cats/cats.module';
import { AuthModule } from './auth/auth.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { RoleGuard } from './auth/role.guard';
import { APP_GUARD } from '@nestjs/core';
import { TasksModule } from './tasks/tasks.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { FrontendMiddleware } from './middleware/frontend.middleware';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    OrganizationsModule,
    PassportModule,
    MongooseModule.forRoot(process.env.MONGO_URL),
    ColoniesModule,
    CatsModule,
    TasksModule,
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'client'),
    // }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}

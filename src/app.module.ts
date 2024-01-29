import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './infra/auth/auth.module';
import { MyConfigModule } from './infra/config/config.module';
import { PhotoVoltaicController } from './presentation/controllers/photovoltaic.controller';
import { ComponentService } from './data/component.service';
import { PrismaService } from './data/prisma.service';
import { UserService } from './data/user.service';
import { AuthController } from './presentation/controllers/auth.controller';
import { AuthService } from './data/auth.service';

@Module({
  imports: [
    AuthModule,
    MyConfigModule
  ],
  controllers: [AppController, PhotoVoltaicController, AuthController],
  providers: [AppService, ComponentService, UserService, AuthService, PrismaService],
  exports: [AuthService]
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { MyConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { PrismaService } from 'src/data/prisma.service';
import { AuthService } from 'src/data/auth.service';
import { UserService } from 'src/data/user.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [MyConfigModule],
      useFactory: (config: ConfigService) => ({
        secret: config.get(),
        signOptions: {expiresIn: '2h'}
      }),
      inject: [ConfigService]
    }),
    MyConfigModule,
  ],
  providers: [JwtStrategy, AuthService, UserService, PrismaService],
  exports: [PassportModule, JwtModule],
})
export class AuthModule {}
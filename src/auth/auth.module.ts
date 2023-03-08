import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { KakaoStrategy } from 'strategy/kakao.strategy';
import { JwtModule } from '@nestjs/jwt';
import { Users } from 'entities/Users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from 'strategy/auth.jwt.strategy';

@Module({
  imports: [
    PassportModule.register({}),
    TypeOrmModule.forFeature([Users]),
    JwtModule.register({
      secret: process.env.JWTSECRETKEY,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [KakaoStrategy, AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [],
})
export class AuthModule {}

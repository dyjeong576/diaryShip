import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { KakaoGuard } from 'guard/kakao.gaurd';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('hello')
  async hello() {
    return 'Hello';
  }

  @UseGuards(KakaoGuard)
  @Get('kakao')
  async kakaologin(
    @Req() req: any,
  ): Promise<{ accessToken: string } | undefined> {
    const kakaoUserInfo: any = req.user.profile._json.kakao_account;

    const userDto: CreateUserDto = {
      email: kakaoUserInfo.email,
      name: kakaoUserInfo.profile.nickname,
      social_id: 1,
      profile_image: kakaoUserInfo.profile.profile_image_url,
    };

    const jwt = await this.authService.login(userDto);

    return jwt;
  }
}

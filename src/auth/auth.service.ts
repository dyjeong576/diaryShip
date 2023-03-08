import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'entities/Users.entity';
import { Payload } from 'strategy/auth.jwt.strategy';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    private jwtService: JwtService,
  ) {}

  async create(userData: CreateUserDto): Promise<Users> {
    const { email, profile_image, name } = userData;

    const user = new Users();
    user.email = email;
    user.profile_image = profile_image;
    user.name = name;

    await this.usersRepository.save(user);

    return user;
  }

  async login(userData: CreateUserDto): Promise<{ accessToken: string }> {
    let user = await this.usersRepository.findOne({
      where: { email: userData.email, social_id: userData.social_id },
    });
    if (!user) user = await this.usersRepository.save({ ...userData });

    const payload: Payload = {
      username: user.name,
      sub: user.id,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { boardImages } from 'entities/boardImages.entity';
import { boards } from 'entities/boards.entity';
import { tagGroups } from 'entities/tagGroups.entity';
import { Users } from 'entities/Users.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ormconfig } from '../ormConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([Users, boards, tagGroups, boardImages]),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

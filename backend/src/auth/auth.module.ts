import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { FacebookStrategy } from './facebook.strategy';

@Module({
  imports: [],
  providers: [FacebookStrategy],
  controllers: [AuthController],
})
export class AuthModule {}

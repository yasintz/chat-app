import { Controller, Post, Headers } from '@nestjs/common';
import { JwtSignService } from '../auth/jwt-sign.service';
import { PostMemberHeadersDto } from './app-auth.schema';
import { AppAuthService } from './app-auth.service';

@Controller('app-auth')
export class AppAuthController {
  constructor(
    private appAuthService: AppAuthService,
    private jwtSignService: JwtSignService
  ) {}

  @Post('/member')
  async signup(@Headers() headers: PostMemberHeadersDto) {
    const member = await this.appAuthService.validateMemberToken(
      headers.authorization
    );
    const token = await this.jwtSignService.signMemberToken(member);
    return { token };
  }
}

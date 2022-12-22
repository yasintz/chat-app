import { Controller, Post, Headers, Param } from '@nestjs/common';
import { JwtSignService } from '../auth/jwt-sign.service';
import { PostMemberHeadersDto } from './app-auth.schema';
import { AppAuthService } from './app-auth.service';

@Controller('app-auth')
export class AppAuthController {
  constructor(
    private appAuthService: AppAuthService,
    private jwtSignService: JwtSignService
  ) {}

  @Post('/:appId/member')
  async signup(
    @Param('appId') appId: string,
    @Headers() headers: PostMemberHeadersDto
  ) {
    const member = await this.appAuthService.validateMemberToken(
      appId,
      headers.authorization
    );
    if (!member) {
      throw new Error();
    }
    const token = await this.jwtSignService.signCustomerToken(member);
    return { token };
  }
}

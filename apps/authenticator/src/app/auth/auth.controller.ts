import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { UserSignupDto } from './auth.schema';
import { AuthService } from './auth.service';
import { SimpleUserAuthGuard } from './guard/simple-user-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(SimpleUserAuthGuard)
  @Post('login/simple-user')
  async login(@Request() req) {
    return this.authService.loginSimpleUser(req.user);
  }

  @Post('signup/simple-user')
  async signup(@Body() user: UserSignupDto) {
    return this.authService.signupSimpleUser(user);
  }

  // TODO: remove after signup implementation
  @Post('encrypt-password')
  async encryptPassword(@Body() body: { password: string }) {
    return this.authService.encryptPassword(body.password);
  }
}

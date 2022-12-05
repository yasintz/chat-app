import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { CustomerAuthGuard } from './customer-auth.guard';
import { AuthService } from './auth.service';
import { MemberAuthGuard } from './member-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(CustomerAuthGuard)
  @Post('customer/login')
  async login(@Request() req) {
    return this.authService.loginCustomer(req.user);
  }

  @UseGuards(MemberAuthGuard)
  @Post('member/login')
  async memberLogin(@Request() req) {
    return this.authService.loginMember(req.user);
  }

  // TODO: remove after signup implementation
  @Post('encrypt-password')
  async encryptPassword(@Body() body: { password: string }) {
    return this.authService.encryptPassword(body.password);
  }
}

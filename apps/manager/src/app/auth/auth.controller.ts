import { Controller, Req, Post, UseGuards, Body } from '@nestjs/common';
import { CustomerAuthGuard } from './guard/customer-auth.guard';
import { AuthService } from './auth.service';
import { MemberAuthGuard } from './guard/member-auth.guard';
import type { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(CustomerAuthGuard)
  @Post('customer/login')
  async login(@Req() req: Request) {
    return this.authService.loginCustomer(req.user as any);
  }

  @UseGuards(MemberAuthGuard)
  @Post('member/login')
  async memberLogin(@Req() req: Request) {
    return this.authService.loginMember(req.user as any);
  }

  // TODO: remove after signup implementation
  @Post('encrypt-password')
  async encryptPassword(@Body() body: { password: string }) {
    return this.authService.encryptPassword(body.password);
  }
}

import { Controller, Req, Post, UseGuards, Body } from '@nestjs/common';
import { CustomerAuthGuard } from './guard/customer-auth.guard';
import { AuthService } from './auth.service';
import { MemberAuthGuard } from './guard/member-auth.guard';
import type { Request } from 'express';
import { JwtSignService } from './jwt-sign.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtSignService: JwtSignService
  ) {}

  @UseGuards(CustomerAuthGuard)
  @Post('customer/login')
  async login(@Req() req: Request) {
    const token = await this.jwtSignService.signCustomerToken(req.user as any);

    return { token };
  }

  @UseGuards(MemberAuthGuard)
  @Post('member/login')
  async memberLogin(@Req() req: Request) {
    const token = await this.jwtSignService.signMemberToken(req.user as any);

    return { token };
  }

  // TODO: remove after signup implementation
  @Post('encrypt-password')
  async encryptPassword(@Body() body: { password: string }) {
    return this.authService.encryptPassword(body.password);
  }
}

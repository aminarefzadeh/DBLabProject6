import { Controller, UseGuards, Post, Request, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Post('auth/login')
  @Header('Content-Type', 'application/json')
  @UseGuards(LocalAuthGuard) 
  async login( @Request() req) {
    return this.authService.login(req.user);
  }
}

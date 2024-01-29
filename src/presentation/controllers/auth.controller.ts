import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../../data/auth.service';
import { UserService } from 'src/data/user.service';
import { HttpResponse } from '../protocols/http-response';
import { ok, serverError } from '../helpers/http.helper';
import { LoginDTO, UserDTO } from 'src/domain/user.dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly userService: UserService) {}

  @Post('/login')
  async login(@Body() payload: LoginDTO): Promise<HttpResponse> {
    try {
      const token = await this.authService.login(payload);
      return ok(token)
    } catch (error) {
      console.error(error.message);
      throw serverError(error)
    }
  }

  @Post('/register')
  async register(@Body() payload: UserDTO): Promise<HttpResponse> {
    const user = await this.userService.create(payload);
    return ok(user);
  }
}
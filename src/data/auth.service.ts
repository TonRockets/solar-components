import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import { UserModel } from 'src/domain/user.model';
import { LoginDTO } from 'src/domain/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(payload: LoginDTO): Promise<UserModel> {
    const user = await this.userService.findByUseEmail(payload.email);
    if (user && user.password === payload.password) {
      return user;
    }
    return null;
  }

  async login(user: LoginDTO): Promise<string> {
    const isValidUser = await this.validateUser(user)
    if (!isValidUser) {
      return "Usuário não encontrado!"
    }
    return this.jwtService.sign(user)
  }
}
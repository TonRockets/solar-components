import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service"
import { UserModel } from "src/domain/user.model";
import { UserDTO } from "src/domain/user.dto";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(payload: UserDTO): Promise<UserModel> {
      const user = await this.prisma.user.create({data: payload});
      delete user.password
      return user
  }

  async findByUseEmail(userEmail: string): Promise<UserModel> {
    return await this.prisma.user.findUnique({
      where: {
        email: userEmail
      }
    });
  }

  async findById(id: number): Promise<UserModel> {
      return this.prisma.user.findUnique({
        where: { id },
    });
  }
}
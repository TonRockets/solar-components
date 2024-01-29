import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { ComponentModel } from "../domain/component.model";

@Injectable()
export class ComponentService {
    constructor(private readonly prisma: PrismaService) { }
    
    async createComponent(data): Promise<void> {
      await this.prisma.solarComponent.create({
          data
        });
    }

    async getAllComponents(): Promise<ComponentModel[]> {
        const components = await this.prisma.solarComponent.findMany();
        return components;
    }

    async getComponent(id: string): Promise<ComponentModel> {
        return this.prisma.solarComponent.findUnique({
          where: { id },
        });
    }
    
    async updateComponent(id: string, data: ComponentModel): Promise<ComponentModel> {
        return this.prisma.solarComponent.update({
          where: { id },
          data,
        });
    }
    
    async deleteComponent(id: string): Promise<ComponentModel> {
        console.log('ID NO SERVICE -->> ', id);
        
        return this.prisma.solarComponent.delete({
          where: { id },
        });
      }
}
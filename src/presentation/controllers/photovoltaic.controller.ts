import { Body, Controller, Delete, Get, Param, Post, UseGuards } from "@nestjs/common";
import { HttpResponse } from "../protocols/http-response";
import { ok, serverError } from "../helpers/http.helper";
import { ComponentService } from "src/data/component.service";
import { JwtAuthGuard } from "src/infra/auth/jwt-auth.guard";
import { CreateComponentDTO } from "src/domain/component.dto";

@Controller('/component')
export class PhotoVoltaicController  {
    constructor(private readonly componentService: ComponentService) { }
    
    @Post('/')
    @UseGuards(JwtAuthGuard)
    async createComponent(@Body() data: CreateComponentDTO): Promise<HttpResponse> {
        try {
            const result = await this.componentService.createComponent(data)
            return ok(result)
        } catch (error) {
            console.log(error.message);
            return serverError(error)
        }
    }

    @Get('/')
    @UseGuards(JwtAuthGuard)
    async getComponent(): Promise<HttpResponse> {
        try {
            const result = await this.componentService.getAllComponents()
            return ok(result)
        } catch (error) {
            console.log(error.message);
            return serverError(error)
        }
    }

    @Delete('/:id')
    @UseGuards(JwtAuthGuard)
    async deleteComponent(@Param('id') id): Promise<HttpResponse> {
        try {
            const result = await this.componentService.deleteComponent(id)
            return ok(result)
        } catch (error) {
            console.log(error.message);
            return serverError(error)
        }
    }
}
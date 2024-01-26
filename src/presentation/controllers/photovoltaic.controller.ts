import { Body, Post } from "@nestjs/common";
import { HttpResponse } from "../protocols/http-response";
import { ok, serverError } from "../helpers/http.helper";
import { ComponentService } from "src/data/component.service";

export class PhotoVoltaicController  {
    constructor(private readonly componentService: ComponentService) { }
    
    @Post()
    async createComponent(@Body() data): Promise<HttpResponse> {
        try {
            const result = await this.componentService.createComponent(data)
            return ok(result)
        } catch (error) {
            console.log(error.message);
            return serverError(error)
        }
    }
}
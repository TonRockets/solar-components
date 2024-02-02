import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

import { GroupNameEnum } from "./enums/groupEnum";
import { SegmentTypeEnum } from "./enums/segmentType";

export class CreateComponentDTO {    
      
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    gtin: string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string;
    
    @IsEnum(SegmentTypeEnum, {message: 'Invalid segment type'})
    @IsNotEmpty()
    @ApiProperty()
    segmentType: SegmentTypeEnum;
    
    
    @IsEnum(GroupNameEnum, {message: 'Invalid group type'})
    @IsNotEmpty()
    @ApiProperty()
    group: GroupNameEnum;
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    height: number;
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    width: number;
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    depth: number;
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    grossWeight: number;
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    netWeight: number;
}
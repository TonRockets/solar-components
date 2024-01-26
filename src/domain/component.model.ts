import { ApiProperty } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";

export class ComponentModel implements Prisma.SolarComponentCreateInput {
  @ApiProperty({
    readOnly: true,
    uniqueItems: true,
  })
  id: string;
  
  @ApiProperty({
    readOnly: true,
    uniqueItems: true,
  })
  gtin: string;
  
  @ApiProperty({
    example: 'john Doe',
    required: true,
    type: String
  })
  name: string;
  
  @ApiProperty({
    example: 'Ongrid | Offgrid',
    required: true,
    type: String
  })
  segmentType: string;
  
  @ApiProperty({
    enum: ['Perfil', 'Modulo', 'Inversor', 'Cabos', 'Conectores', 'Baterias'],
    required: true,
    type: String
  })
  group: string;
  
  @ApiProperty({
    example: '23',
    required: true,
    type: Number
  })
  height: number;
  
  @ApiProperty({
    example: '23',
    required: true,
    type: Number
  })
  width: number;
  
  @ApiProperty({
    example: '23',
    required: true,
    type: Number
  })
  depth: number;
  
  @ApiProperty({
    example: '23',
    required: true,
    type: Number
  })
  grossWeight: number;
  
  @ApiProperty({
    example: '23',
    required: true,
    type: Number
  })
  netWeight: number;
}
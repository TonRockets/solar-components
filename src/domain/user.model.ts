import { ApiProperty } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";

export class UserModel implements Prisma.UserCreateInput {

    @ApiProperty({
        required: true,
        readOnly: true,
        type: Number
    })
    id: number;

    @ApiProperty({
        example: "johndoe@example.com",
        required: true,
        type: String
    })
    email: string;

    @ApiProperty({
        example: "John Doe",
        required: true,
        type: String
    })
    name: string;

    @ApiProperty({
        required: true,
        type: String
    })
    password: string;
}
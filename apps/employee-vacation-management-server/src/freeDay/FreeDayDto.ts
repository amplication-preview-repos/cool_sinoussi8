import { ObjectType, Field } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

@ObjectType("FreeDayDtoObject")
class FreeDayDto {
    @Field(() => Date)
    @Type(() => Date)
    date!: Date;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    description!: string;
}

export { FreeDayDto as FreeDayDto };
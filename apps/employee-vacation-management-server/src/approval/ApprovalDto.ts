import { ObjectType, Field } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

@ObjectType("ApprovalDtoObject")
class ApprovalDto {
    @Field(() => Date)
    @Type(() => Date)
    approvalDate!: Date;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    approvedBy!: string;
}

export { ApprovalDto as ApprovalDto };
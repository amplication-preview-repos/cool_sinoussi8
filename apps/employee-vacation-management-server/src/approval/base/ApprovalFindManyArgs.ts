/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ApprovalWhereInput } from "./ApprovalWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ApprovalOrderByInput } from "./ApprovalOrderByInput";

@ArgsType()
class ApprovalFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ApprovalWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ApprovalWhereInput, { nullable: true })
  @Type(() => ApprovalWhereInput)
  where?: ApprovalWhereInput;

  @ApiProperty({
    required: false,
    type: [ApprovalOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ApprovalOrderByInput], { nullable: true })
  @Type(() => ApprovalOrderByInput)
  orderBy?: Array<ApprovalOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ApprovalFindManyArgs as ApprovalFindManyArgs };

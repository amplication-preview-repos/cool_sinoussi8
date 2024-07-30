/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { FreeDay } from "./FreeDay";
import { FreeDayCountArgs } from "./FreeDayCountArgs";
import { FreeDayFindManyArgs } from "./FreeDayFindManyArgs";
import { FreeDayFindUniqueArgs } from "./FreeDayFindUniqueArgs";
import { CreateFreeDayArgs } from "./CreateFreeDayArgs";
import { UpdateFreeDayArgs } from "./UpdateFreeDayArgs";
import { DeleteFreeDayArgs } from "./DeleteFreeDayArgs";
import { FreeDayDto } from "../FreeDayDto";
import { FreeDayService } from "../freeDay.service";
@graphql.Resolver(() => FreeDay)
export class FreeDayResolverBase {
  constructor(protected readonly service: FreeDayService) {}

  async _freeDaysMeta(
    @graphql.Args() args: FreeDayCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [FreeDay])
  async freeDays(
    @graphql.Args() args: FreeDayFindManyArgs
  ): Promise<FreeDay[]> {
    return this.service.freeDays(args);
  }

  @graphql.Query(() => FreeDay, { nullable: true })
  async freeDay(
    @graphql.Args() args: FreeDayFindUniqueArgs
  ): Promise<FreeDay | null> {
    const result = await this.service.freeDay(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => FreeDay)
  async createFreeDay(
    @graphql.Args() args: CreateFreeDayArgs
  ): Promise<FreeDay> {
    return await this.service.createFreeDay({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => FreeDay)
  async updateFreeDay(
    @graphql.Args() args: UpdateFreeDayArgs
  ): Promise<FreeDay | null> {
    try {
      return await this.service.updateFreeDay({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FreeDay)
  async deleteFreeDay(
    @graphql.Args() args: DeleteFreeDayArgs
  ): Promise<FreeDay | null> {
    try {
      return await this.service.deleteFreeDay(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Query(() => [FreeDayDto])
  async ListFreeDays(
    @graphql.Args("args")
    args: string
  ): Promise<FreeDayDto[]> {
    return this.service.ListFreeDays(args);
  }
}

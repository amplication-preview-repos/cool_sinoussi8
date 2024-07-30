import * as graphql from "@nestjs/graphql";
import { FreeDayResolverBase } from "./base/freeDay.resolver.base";
import { FreeDay } from "./base/FreeDay";
import { FreeDayService } from "./freeDay.service";

@graphql.Resolver(() => FreeDay)
export class FreeDayResolver extends FreeDayResolverBase {
  constructor(protected readonly service: FreeDayService) {
    super(service);
  }
}

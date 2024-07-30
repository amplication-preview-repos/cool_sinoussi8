import * as graphql from "@nestjs/graphql";
import { VacationRequestResolverBase } from "./base/vacationRequest.resolver.base";
import { VacationRequest } from "./base/VacationRequest";
import { VacationRequestService } from "./vacationRequest.service";

@graphql.Resolver(() => VacationRequest)
export class VacationRequestResolver extends VacationRequestResolverBase {
  constructor(protected readonly service: VacationRequestService) {
    super(service);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VacationRequestService } from "./vacationRequest.service";
import { VacationRequestControllerBase } from "./base/vacationRequest.controller.base";

@swagger.ApiTags("vacationRequests")
@common.Controller("vacationRequests")
export class VacationRequestController extends VacationRequestControllerBase {
  constructor(protected readonly service: VacationRequestService) {
    super(service);
  }
}

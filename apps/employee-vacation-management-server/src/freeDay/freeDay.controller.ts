import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FreeDayService } from "./freeDay.service";
import { FreeDayControllerBase } from "./base/freeDay.controller.base";

@swagger.ApiTags("freeDays")
@common.Controller("freeDays")
export class FreeDayController extends FreeDayControllerBase {
  constructor(protected readonly service: FreeDayService) {
    super(service);
  }
}

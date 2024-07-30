import { Module } from "@nestjs/common";
import { VacationRequestModuleBase } from "./base/vacationRequest.module.base";
import { VacationRequestService } from "./vacationRequest.service";
import { VacationRequestController } from "./vacationRequest.controller";
import { VacationRequestResolver } from "./vacationRequest.resolver";

@Module({
  imports: [VacationRequestModuleBase],
  controllers: [VacationRequestController],
  providers: [VacationRequestService, VacationRequestResolver],
  exports: [VacationRequestService],
})
export class VacationRequestModule {}

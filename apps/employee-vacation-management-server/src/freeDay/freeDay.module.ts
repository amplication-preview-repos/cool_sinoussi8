import { Module } from "@nestjs/common";
import { FreeDayModuleBase } from "./base/freeDay.module.base";
import { FreeDayService } from "./freeDay.service";
import { FreeDayController } from "./freeDay.controller";
import { FreeDayResolver } from "./freeDay.resolver";

@Module({
  imports: [FreeDayModuleBase],
  controllers: [FreeDayController],
  providers: [FreeDayService, FreeDayResolver],
  exports: [FreeDayService],
})
export class FreeDayModule {}

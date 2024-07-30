import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FreeDayServiceBase } from "./base/freeDay.service.base";

@Injectable()
export class FreeDayService extends FreeDayServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

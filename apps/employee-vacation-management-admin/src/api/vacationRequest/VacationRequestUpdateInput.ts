import { ApprovalUpdateManyWithoutVacationRequestsInput } from "./ApprovalUpdateManyWithoutVacationRequestsInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type VacationRequestUpdateInput = {
  approvals?: ApprovalUpdateManyWithoutVacationRequestsInput;
  employee?: EmployeeWhereUniqueInput | null;
  endDate?: Date | null;
  startDate?: Date | null;
  status?: "Option1" | null;
};

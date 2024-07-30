import { ApprovalCreateNestedManyWithoutVacationRequestsInput } from "./ApprovalCreateNestedManyWithoutVacationRequestsInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type VacationRequestCreateInput = {
  approvals?: ApprovalCreateNestedManyWithoutVacationRequestsInput;
  employee?: EmployeeWhereUniqueInput | null;
  endDate?: Date | null;
  startDate?: Date | null;
  status?: "Option1" | null;
};

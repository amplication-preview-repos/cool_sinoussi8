import { ApprovalListRelationFilter } from "../approval/ApprovalListRelationFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type VacationRequestWhereInput = {
  approvals?: ApprovalListRelationFilter;
  employee?: EmployeeWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  status?: "Option1";
};

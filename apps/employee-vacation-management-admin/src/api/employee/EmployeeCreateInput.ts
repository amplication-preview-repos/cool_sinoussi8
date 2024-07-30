import { VacationRequestCreateNestedManyWithoutEmployeesInput } from "./VacationRequestCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  department?: string | null;
  email?: string | null;
  name?: string | null;
  vacationRequests?: VacationRequestCreateNestedManyWithoutEmployeesInput;
};

import { VacationRequestUpdateManyWithoutEmployeesInput } from "./VacationRequestUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  department?: string | null;
  email?: string | null;
  name?: string | null;
  vacationRequests?: VacationRequestUpdateManyWithoutEmployeesInput;
};

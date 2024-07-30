import { VacationRequest } from "../vacationRequest/VacationRequest";

export type Employee = {
  createdAt: Date;
  department: string | null;
  email: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  vacationRequests?: Array<VacationRequest>;
};

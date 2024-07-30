import { Approval } from "../approval/Approval";
import { Employee } from "../employee/Employee";

export type VacationRequest = {
  approvals?: Array<Approval>;
  createdAt: Date;
  employee?: Employee | null;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};

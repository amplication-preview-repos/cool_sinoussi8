import { VacationRequest } from "../vacationRequest/VacationRequest";

export type Approval = {
  approvalDate: Date | null;
  approvedBy: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  vacationRequest?: VacationRequest | null;
};

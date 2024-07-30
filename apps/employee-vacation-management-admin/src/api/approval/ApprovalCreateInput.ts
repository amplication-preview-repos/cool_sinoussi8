import { VacationRequestWhereUniqueInput } from "../vacationRequest/VacationRequestWhereUniqueInput";

export type ApprovalCreateInput = {
  approvalDate?: Date | null;
  approvedBy?: string | null;
  vacationRequest?: VacationRequestWhereUniqueInput | null;
};

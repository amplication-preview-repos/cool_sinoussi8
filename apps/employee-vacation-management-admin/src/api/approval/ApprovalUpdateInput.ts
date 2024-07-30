import { VacationRequestWhereUniqueInput } from "../vacationRequest/VacationRequestWhereUniqueInput";

export type ApprovalUpdateInput = {
  approvalDate?: Date | null;
  approvedBy?: string | null;
  vacationRequest?: VacationRequestWhereUniqueInput | null;
};

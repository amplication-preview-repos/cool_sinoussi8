import { SortOrder } from "../../util/SortOrder";

export type ApprovalOrderByInput = {
  approvalDate?: SortOrder;
  approvedBy?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  vacationRequestId?: SortOrder;
};

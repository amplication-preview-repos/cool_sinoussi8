import { Approval as TApproval } from "../api/approval/Approval";

export const APPROVAL_TITLE_FIELD = "approvedBy";

export const ApprovalTitle = (record: TApproval): string => {
  return record.approvedBy?.toString() || String(record.id);
};

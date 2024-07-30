import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { VacationRequestWhereUniqueInput } from "../vacationRequest/VacationRequestWhereUniqueInput";

export type ApprovalWhereInput = {
  approvalDate?: DateTimeNullableFilter;
  approvedBy?: StringNullableFilter;
  id?: StringFilter;
  vacationRequest?: VacationRequestWhereUniqueInput;
};

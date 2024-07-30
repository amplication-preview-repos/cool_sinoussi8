import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { VacationRequestListRelationFilter } from "../vacationRequest/VacationRequestListRelationFilter";

export type EmployeeWhereInput = {
  department?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  vacationRequests?: VacationRequestListRelationFilter;
};

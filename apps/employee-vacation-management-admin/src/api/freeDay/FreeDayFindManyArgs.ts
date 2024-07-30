import { FreeDayWhereInput } from "./FreeDayWhereInput";
import { FreeDayOrderByInput } from "./FreeDayOrderByInput";

export type FreeDayFindManyArgs = {
  where?: FreeDayWhereInput;
  orderBy?: Array<FreeDayOrderByInput>;
  skip?: number;
  take?: number;
};

import { FreeDay as TFreeDay } from "../api/freeDay/FreeDay";

export const FREEDAY_TITLE_FIELD = "description";

export const FreeDayTitle = (record: TFreeDay): string => {
  return record.description?.toString() || String(record.id);
};

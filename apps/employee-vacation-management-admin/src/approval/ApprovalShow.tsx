import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { VACATIONREQUEST_TITLE_FIELD } from "../vacationRequest/VacationRequestTitle";

export const ApprovalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="approvalDate" source="approvalDate" />
        <TextField label="Approved By" source="approvedBy" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="VacationRequest"
          source="vacationrequest.id"
          reference="VacationRequest"
        >
          <TextField source={VACATIONREQUEST_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};

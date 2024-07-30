import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { VacationRequestTitle } from "../vacationRequest/VacationRequestTitle";

export const ApprovalCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="approvalDate" source="approvalDate" />
        <TextInput label="Approved By" source="approvedBy" />
        <ReferenceInput
          source="vacationRequest.id"
          reference="VacationRequest"
          label="VacationRequest"
        >
          <SelectInput optionText={VacationRequestTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

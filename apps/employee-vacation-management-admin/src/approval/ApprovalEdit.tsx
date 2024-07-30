import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { VacationRequestTitle } from "../vacationRequest/VacationRequestTitle";

export const ApprovalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

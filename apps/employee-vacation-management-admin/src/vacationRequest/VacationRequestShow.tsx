import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { VACATIONREQUEST_TITLE_FIELD } from "./VacationRequestTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";

export const VacationRequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="endDate" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="startDate" source="startDate" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Approval"
          target="vacationRequestId"
          label="Approvals"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

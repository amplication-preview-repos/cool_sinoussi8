import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VACATIONREQUEST_TITLE_FIELD } from "../vacationRequest/VacationRequestTitle";

export const ApprovalList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Approvals"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};

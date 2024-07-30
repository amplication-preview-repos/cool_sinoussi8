import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FreeDayList } from "./freeDay/FreeDayList";
import { FreeDayCreate } from "./freeDay/FreeDayCreate";
import { FreeDayEdit } from "./freeDay/FreeDayEdit";
import { FreeDayShow } from "./freeDay/FreeDayShow";
import { ApprovalList } from "./approval/ApprovalList";
import { ApprovalCreate } from "./approval/ApprovalCreate";
import { ApprovalEdit } from "./approval/ApprovalEdit";
import { ApprovalShow } from "./approval/ApprovalShow";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { VacationRequestList } from "./vacationRequest/VacationRequestList";
import { VacationRequestCreate } from "./vacationRequest/VacationRequestCreate";
import { VacationRequestEdit } from "./vacationRequest/VacationRequestEdit";
import { VacationRequestShow } from "./vacationRequest/VacationRequestShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"EmployeeVacationManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="FreeDay"
          list={FreeDayList}
          edit={FreeDayEdit}
          create={FreeDayCreate}
          show={FreeDayShow}
        />
        <Resource
          name="Approval"
          list={ApprovalList}
          edit={ApprovalEdit}
          create={ApprovalCreate}
          show={ApprovalShow}
        />
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="VacationRequest"
          list={VacationRequestList}
          edit={VacationRequestEdit}
          create={VacationRequestCreate}
          show={VacationRequestShow}
        />
      </Admin>
    </div>
  );
};

export default App;

import React from "react";
import { Switch, Route, BrowserRouter, useHistory } from "react-router-dom";
import { useAuth } from "./utils/AuthContext";

import Home from "./pages/Home";
import NotFound from "./pages/Error/NotFound";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import Employees from "./pages/Employees";
import EmployeesCreate from "./pages/Employees/Create";

import Exams from "./pages/Exams";
import ExamsExecution from "./pages/Exams/Execution";
import ExamsCreate from "./pages/Exams/Create";
import ExamsTypeCreate from "./pages/Exams/Type";

import Reports from "./pages/Reports";
import ReportsCreate from "./pages/Reports/Create";

const ProtectedRoute = ({
  path,
  component,
}: {path: string, component: any}): JSX.Element => {
  const { signed } = useAuth();
  const history = useHistory();

  if (signed) {
    return <Route path={path} component={component} />;
  } else {
    history.push("/login");
    return <p>Redirecting...</p>;
  }
};

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <ProtectedRoute path="/employees" component={Employees} />
          <ProtectedRoute path="/create-employee" component={EmployeesCreate} />
          <ProtectedRoute path="/edit-employee/:id" component={EmployeesCreate} />
          <ProtectedRoute path="/exams" component={Exams} />
          <ProtectedRoute path="/execution" component={ExamsExecution} />
          <ProtectedRoute path="/create-exam" component={ExamsCreate} />
          <ProtectedRoute path="/edit-exam/:id" component={ExamsCreate} />
          <ProtectedRoute path="/create-type" component={ExamsTypeCreate} />
          <ProtectedRoute path="/edit-type/:id" component={ExamsTypeCreate} />
          <ProtectedRoute path="/reports" component={Reports} />
          <ProtectedRoute path="/create-report" component={ReportsCreate} />
          <ProtectedRoute path="/edit-report/:id" component={ReportsCreate} />
          <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

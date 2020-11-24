import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

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

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/employees" component={Employees} />
        <Route path="/create-employee" component={EmployeesCreate} />
        <Route path="/exams" component={Exams} />
        <Route path="/execution" component={ExamsExecution} />
        <Route path="/create-exam" component={ExamsCreate} />
        <Route path="/create-type" component={ExamsTypeCreate} />
        <Route path="/reports" component={Reports} />
        <Route path="/create-report" component={ReportsCreate} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

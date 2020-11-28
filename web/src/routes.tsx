import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/Error/NotFound";

import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";

import Reports from "./pages/Reports";
import ReportsCreate from "./pages/Reports/Create";

// const ProtectedRoute = ({
//   path,
//   component,
// }: {
//   path: string;
//   component: any;
// }): JSX.Element => {
//   const { signed } = useAuth();
//   const history = useHistory();

//   if (signed) {
//     return <Route path={path} component={component} />;
//   } else {
//     history.push("/login");
//     return <p>Redirecting...</p>;
//   }
// };

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        {/* <Route path="/register" component={Register} /> */}
        <Route path="/reports" component={Reports} />
        <Route path="/create-report" component={ReportsCreate} />
        <Route path="/edit-report/:id" component={ReportsCreate} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

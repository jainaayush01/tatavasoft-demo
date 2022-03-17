
import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { RoutePaths } from "../utils/enum";
//component lazy loading
const Login = lazy(() => import("../pages/login"));
const Register = lazy(() => import("../pages/register"));
const AppRoutes: React.FC = () => {
    return (
        <Switch>
            <Route exact path={RoutePaths.Login} component={Login} />
            <Route exact path={RoutePaths.Register} component={Register} />
        </Switch>
    );
};
export default AppRoutes;

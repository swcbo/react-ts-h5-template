import React from "react";
import { Redirect, Route, Switch } from "react-router";
import routes from ".";
import { MyRoute } from "../typings/router";

const getRouteView = (routes: MyRoute.RouteConfig[]) => {
    return routes.map(({ redirect, routes, path, component: Component, exact, ...other }) => (redirect ?
        <Redirect to={redirect} key={`redirect_${redirect}`} /> :
        <Route {...other} key={path} path={path}  render={() =>
            Component ? <Component routes={routes}>
                {routes ? getRouteView(routes) : null}
            </Component> : null}>
        </Route>))
}

const RouteRender: React.FC = () => {
    return <Switch>
        {getRouteView(routes)}
    </Switch>
}
export default RouteRender;
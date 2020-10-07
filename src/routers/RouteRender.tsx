import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import routes from ".";
import { MyRoute } from "../typings/router";

const generateRoute = ({ redirect, routes, path, component: Component, exact, tabBars, ...other }: MyRoute.RouteConfig) => {
    const realKey = Array.isArray(path) ? path[0] : path
    if (routes || tabBars) {
        return <Route {...other} path={path} key={realKey} render={() => {
            if (other.title)
                document.title = other.title
            return Component && <Component tabBars={tabBars}>
                <Switch >
                    {(routes || tabBars)?.map(v => generateRoute(v))}
                    <Redirect to={redirect || ((routes || tabBars)!![0].path as string)} exact from={realKey}></Redirect>
                </Switch>
            </Component>
        }}>
        </Route>


    }
    if (redirect) {
        return <Redirect to={redirect} key={`redirect_${redirect}`} exact from={realKey}/>
    }
    return <Route {...other} path={path} key={realKey} render={() => {
        if (other.title)
            document.title = other.title
        return Component && <Component tabBars={tabBars}>
        </Component>
    }}>
    </Route>
}

const RouteRender: React.FC = () => {
    return <Suspense fallback={<></>}>
        <Switch>
            {routes.map(v => generateRoute(v))}
        </Switch>
    </Suspense>
}
export default RouteRender;
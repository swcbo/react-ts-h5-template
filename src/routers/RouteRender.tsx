import React, { Suspense } from "react";
import { Redirect, Route } from "react-router";
import routes from ".";
import AnimatedSwitch from "../components/AnimatedSwitch";
import { MyRoute } from "../typings/router";

const generateRoute = ({ redirect, routes, path, component: Component, exact, tabBars, ...other }: MyRoute.RouteConfig) => {
    const realKey = Array.isArray(path) ? path[0] : path
    if (routes || tabBars) {
        return <Route {...other} path={path} key={realKey} render={() => {
            if (other.title)
                document.title = other.title
            return Component && <Component tabBars={tabBars} {...other}>
                <AnimatedSwitch >
                    {(routes || tabBars)?.map(v => generateRoute(v))}
                    <Redirect to={redirect || ((routes || tabBars)!![0].path as string)} exact from={realKey}></Redirect>
                </AnimatedSwitch>
            </Component>
        }}>
        </Route>


    }
    if (redirect) {
        return <Redirect to={redirect} key={`redirect_${redirect}`} exact from={realKey} />
    }
    return <Route {...other} path={path} key={realKey} render={() => {
        if (other.title)
            document.title = other.title
        return Component && <Component tabBars={tabBars} {...other}>
        </Component>
    }}>
    </Route>
}

const RouteRender: React.FC = () => {
    return <Suspense fallback={<>loading</>}>
        <AnimatedSwitch>
            {routes.map(v => generateRoute(v))}
        </AnimatedSwitch>
    </Suspense>
}
export default RouteRender;
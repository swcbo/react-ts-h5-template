import React, { Suspense, useRef } from "react";
import { useHistory } from "react-router";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import routes, { TabBarList } from ".";
import AnimatedSwitch from "../components/AnimatedSwitch";
import { MyRoute } from "../typings/router";
import { Location } from "history"

const generateRoute = ({ redirect, routes, path, component: Component, exact, tabBars, ...other }: MyRoute.RouteConfig) => {
    const realKey = Array.isArray(path) ? path[0] : path
    if (routes || tabBars) {
        return <Route {...other} path={path} key={realKey} render={() => {
            if (other.title)
                document.title = other.title
            return Component && <Component tabBars={tabBars} {...other}>
                <Switch>
                    {(routes || tabBars)?.map(v => generateRoute(v))}
                    <Redirect to={redirect || ((routes || tabBars)!![0].path as string)} exact from={realKey}></Redirect>
                </Switch>
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
    const history = useHistory()
    const oldLocation = useRef<Location | null>(null)
    const location = useLocation()
    let classNames = '';
    if (history.action === 'PUSH') {
        classNames = `forward-from-right`;
    } else if (history.action === 'POP' && oldLocation.current) {
        classNames = `back-to-right`;
    }
    // tabBar 判断
    const tabIndex = TabBarList.findIndex(v => v.path === location.pathname)
    if (tabIndex !== -1) {
        const oldIndex = TabBarList.findIndex(v => v.path === oldLocation.current?.pathname);
        if (oldIndex !== -1) (classNames = tabIndex > oldIndex ? `forward-from-${TabBarList[tabIndex].sceneMode}` : `back-to-${TabBarList[tabIndex].sceneMode}`)
    }
    oldLocation.current = location;
    return <AnimatedSwitch classNames={classNames} primaryKey={location.pathname}>
        <div className="fullPage">
            <Suspense fallback={<></>}>
                <Switch location={location} > {routes.map(v => generateRoute(v))}</Switch>
            </Suspense>
        </div>
    </AnimatedSwitch>
}
export default RouteRender;
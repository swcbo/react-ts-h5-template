import { Location } from "history";
import React, { ReactNode } from "react";
import { Switch, useHistory, useLocation } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import routers from "../../routers";
import { MyRoute } from "../../typings/router";
import { treeToList } from "../../utils";
import "./index.scss";
export interface AnimatedSwitchProps {
    children?: ReactNode,
    tabBars?: MyRoute.RouteChild[] | undefined
}
const DEFAULT_SCENE_CONFIG = {
    enter: 'from-right',
    exit: 'to-exit'
};

const getSceneConfig = (location: Location) => {
    const list = treeToList(routers,['tabBars','route'])
    const matchedRoute = list.find(({ path }) => new RegExp(`^${path}$`).test(location.pathname));
    return (matchedRoute && matchedRoute.sceneConfig) || DEFAULT_SCENE_CONFIG;
};
let oldLocation: Location | null = null;
const AnimatedSwitch: React.FC<AnimatedSwitchProps> = ({ children }) => {
    const history = useHistory()
    const location = useLocation()
    let classNames = '';
    if (history.action === 'PUSH') {
        classNames = 'forward-' + getSceneConfig(location).enter;
    } else if (history.action === 'POP' && oldLocation) {
        classNames = 'back-' + getSceneConfig(oldLocation).exit;
    }
    oldLocation = location;
    return (<TransitionGroup
        childFactory={child => React.cloneElement(child, { classNames })}>
        <CSSTransition timeout={300} key={location.pathname}>
            <Switch location={location}>{children}</Switch>
        </CSSTransition>
    </TransitionGroup>
    );
}

export default React.memo(AnimatedSwitch)


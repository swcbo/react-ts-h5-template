import React, { ReactNode } from "react";
import { Switch, useHistory, useLocation } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./index.scss";
/**
 *
 * @param {way} props
 * @description 用于页面路由跳转 通过way指定跳转方式，指定way=refade
 * 则反向
 *
 */

const ANIMATION_MAP = {
    PUSH: 'forward',
    POP: 'back',
    REPLACE: "forward",
}

const AnimatedSwitch = (props: { children?: ReactNode }) => {
    const { children } = props;
    const history = useHistory()
    const location = useLocation()
    return (<TransitionGroup
        className={'router-wrapper'}
        childFactory={child => React.cloneElement(
            child,
            { classNames: ANIMATION_MAP[history.action] }
        )}
    >
        <CSSTransition
            timeout={300}
            key={location.pathname}
        >
            <Switch location={location}>{children}</Switch>
        </CSSTransition>
    </TransitionGroup>
    );
}

export default React.memo(AnimatedSwitch)


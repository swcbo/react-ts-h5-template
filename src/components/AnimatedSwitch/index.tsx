import { Location } from "history";
import React, { ReactNode, Suspense } from "react";
import { Switch, useHistory, useLocation } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./index.scss";
export interface AnimatedSwitchProps {
    children?: ReactNode,
    type: 'right' | 'bottom'
}

let oldLocation: Location | null = null;
const AnimatedSwitch: React.FC<AnimatedSwitchProps> = ({ children, type }) => {
    const history = useHistory()
    const location = useLocation()
    let classNames = '';
    if (history.action === 'PUSH') {
        classNames = `forward-from-${type}`;
    } else if (history.action === 'POP' && oldLocation) {
        classNames = `back-to-${type}`;
    }
    oldLocation = location;
    return (<TransitionGroup
        childFactory={child => React.cloneElement(child, { classNames })}
    >
        <CSSTransition key={location.pathname}
            timeout={500} appear unmountOnExit>
            <Suspense fallback={<></>}>
                <Switch location={location} >{children}</Switch>
            </Suspense>
        </CSSTransition>
    </TransitionGroup>
    );
}

export default React.memo(AnimatedSwitch)


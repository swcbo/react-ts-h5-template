import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { MySwitch } from "../../typings/switch";
import "./index.scss";

const AnimatedSwitch: React.FC<MySwitch.AnimatedSwitchProps> = ({ children, classNames, primaryKey, timeout = 500,...other }) => {
    return (<TransitionGroup childFactory={child => React.cloneElement(child, { classNames })}>
        <CSSTransition key={primaryKey}
            timeout={timeout} appear unmountOnExit {...other}>
            {children}
        </CSSTransition>
    </TransitionGroup>
    );
}

export default React.memo(AnimatedSwitch)


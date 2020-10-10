import { White } from "@/typings";
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./index.scss";

const AnimatedSwitch: React.FC<White.AnimatedSwitchProps> = ({ children, classNames, primaryKey, timeout = 500,...other }) => {
    return (<TransitionGroup childFactory={child => React.cloneElement(child, { classNames })}>
        <CSSTransition key={primaryKey}
            timeout={timeout} appear unmountOnExit {...other}>
            {children}
        </CSSTransition>
    </TransitionGroup>
    );
}

export default React.memo(AnimatedSwitch)


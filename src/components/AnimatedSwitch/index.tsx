import { White } from '@/typings';
import { cloneElement, FC, memo } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './index.less';

const AnimatedSwitch: FC<White.AnimatedSwitchProps> = ({
  children,
  classNames,
  primaryKey,
  timeout = 300,
  ...other
}) => {
  return (
    <TransitionGroup
      childFactory={(child) => cloneElement(child, { classNames })}>
      <CSSTransition
        key={primaryKey}
        timeout={timeout}
        appear
        mountOnEnter
        unmountOnExit={false}
        {...other}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default memo(AnimatedSwitch);

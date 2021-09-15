/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-07 14:24:09
 * @LastEditors: 小白
 * @LastEditTime: 2021-09-14 21:08:17
 */
import { White } from '@/typings';
import { cloneElement, FC, memo } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './index.scss';

const AnimatedSwitch: FC<White.AnimatedSwitchProps> = ({
  children,
  classNames,
  primaryKey,
  timeout = 500,
  ...other
}) => {
  return (
    <TransitionGroup
      childFactory={(child) => cloneElement(child, { classNames })}
    >
      <CSSTransition
        key={primaryKey}
        timeout={timeout}
        appear
        unmountOnExit
        {...other}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default memo(AnimatedSwitch);

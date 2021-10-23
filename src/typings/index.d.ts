import { ComponentClass, FunctionComponent, ReactNode } from 'react';
import { RouteProps } from 'react-router-dom';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

/*
 * @Descripttion: 小白命名空间
 * @version: 0.0.1
 * @Author: 小白
 * @Date: 2020-10-10 20:50:06
 * @LastEditors: 小白
 * @LastEditTime: 2021-10-23 17:54:18
 */
export namespace White {
  // route

  // switch
  export type SwitchType = 'right' | 'bottom' | 'scroll' | 'fade';
  type TabBarType = {
    icon: string;
    title: string;
  };
  export interface RouteConfig extends RouteProps {
    routes?: RouteConfig[]; // 子列表
    tabBars?: (RouteConfig & TabBarType)[];
    redirect?: string;
    isTabIndex?: boolean;
    sceneMode?: SwitchType;
    title?: string;
    path: string | string[];
    component?: ComponentClass<any> | FunctionComponent<any>;
  }
  export type RouteTabBar = RouteConfig & TabBarType;

  // notice
  export interface NoticeProps {
    key?: string;
    content?: string;
    type: 'loading' | 'success' | 'fail' | 'warning' | 'info';
    duration: number;
    onClose?: () => void;
  }

  export interface NotifiCationRef {
    // add notice
    addNotice: (notice: NoticeProps) => () => void;
    // removeAll notice
    removeAll: () => void;
  }
  export interface NotifiCation extends NotifiCationRef {
    destroy: () => void;
  }
  export interface NotifiCationProps {
    transitionTime?: number;
    duration?: number;
  }

  export type AnimatedSwitchProps = Omit<
    CSSTransitionProps<any>,
    'addEndListener'
  > & {
    children?: ReactNode;
    primaryKey: string | number | null;
    type?: SwitchType;
    backClassName?: string;
    forwardClassName?: string;
  };

  export interface VirListProps {
    list: any[];
    itemH: number;
    itemRender: (key: any, val: any) => ReactNode;
    wrapNum?: number;
    loadMoreHieght?: number;
    height?: number;
    wrapperClass?: string;
    isEndLoad?: boolean;
    refreshHeight?: number;
    pageSize?: number;
  }
}

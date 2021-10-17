import { ComponentClass, FunctionComponent, ReactNode } from 'react';
import { RouteProps } from 'react-router-dom';
import { Key } from 'readline';

/*
 * @Descripttion: 小白命名空间
 * @version: 0.0.1
 * @Author: 小白
 * @Date: 2020-10-10 20:50:06
 * @LastEditors: 小白
 * @LastEditTime: 2021-09-16 23:02:20
 */
export namespace White {
  // route

  // switch
  export type SwitchType = 'right' | 'bottom' | 'scroll' | 'fade';
  export interface RouteConfig extends RouteProps {
    routes?: RouteConfig[]; // 子列表
    tabBars?: RouteTabBar[];
    redirect?: string;
    isTabIndex?: boolean;
    sceneMode?: SwitchType;
    title?: string;
    path: string | string[];
    component?: ComponentClass<any> | FunctionComponent<any>;
  }

  export type RouteTabBar = RouteConfig & {
    icon: string;
    title: string;
  };
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

  export interface AnimatedSwitchProps {
    children?: ReactNode;
    classNames: string;
    primaryKey: Key | null;
    timeout?: number;
    type?: SwitchType;
    backClassName?: string;
    forwardClassName?: string;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
  }

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

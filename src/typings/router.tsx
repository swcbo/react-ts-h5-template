import { ComponentClass, FunctionComponent } from "react";
import { RouteProps } from "react-router";

export namespace MyRoute {
    export interface RouteConfig extends RouteProps {
        routes?: RouteConfig[] // 子列表
        tabBars?: RouteChild[]
        redirect?: string
        isTabIndex?: boolean
        title?: string
        path?: string | string[];
        component?: ComponentClass<any> | FunctionComponent<any>
    }

    export type RouteChild = RouteConfig & {
        icon: string
        title: string
        selectedIcon: string
    }
}
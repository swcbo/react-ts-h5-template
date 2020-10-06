import { ComponentClass, FunctionComponent } from "react";
import { RouteProps } from "react-router";

export namespace MyRoute {
    export interface RouteConfig extends RouteProps {
        routes?: RouteChild[] // 子列表
        redirect?: string
        title?: string
        path: string
        component?: ComponentClass<any> | FunctionComponent<any>
    }

    export type RouteChild = RouteConfig & {
        icon: string
        title: string
        selectedIcon: string
    }
}
import { ComponentClass, FunctionComponent } from "react";
import { RouteProps } from "react-router-dom";
import { MySwitch } from "./switch";

export namespace MyRoute {
    export interface RouteConfig extends RouteProps {
        routes?: RouteConfig[] // 子列表
        tabBars?: RouteTabBar[]
        redirect?: string
        isTabIndex?: boolean
        sceneMode?: MySwitch.type,
        title?: string
        path: string | string[];
        component?: ComponentClass<any> | FunctionComponent<any>
    }

    export type RouteTabBar = RouteConfig & {
        icon: string
        title: string
        selectedIcon: string
    }
}
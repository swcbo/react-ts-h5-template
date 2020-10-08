import { lazy } from 'react';
import { MyRoute } from '../typings/router';
const Search = lazy(() => import('../pages/Search' /* webpackChunkName: "Search" */))
const List = lazy(() => import('../pages/List' /* webpackChunkName: `List` */))
const Home = lazy(() => import('../pages/Home' /* webpackChunkName: "Home" */))
const Detail = lazy(() => import('../pages/Detail' /* webpackChunkName: "Detail" */))
const Index = lazy(() => import('../pages/Index' /* webpackChunkName: "Index" */))
const Other = lazy(() => import('../pages/Other' /* webpackChunkName: "Other" */))
const Other1 = lazy(() => import('../pages/Other1' /* webpackChunkName: "Other1" */))
const NoFound = lazy(() => import('../components/NoFound' /* webpackChunkName: "NoFound" */))
const commonRoutes: MyRoute.RouteConfig[] = [
    {
        path: '/nofound',
        component: NoFound,
    },
    {
        path: '/',
        redirect: '/home/index'
    },
    {
        path: '/*',
        redirect: '/nofound',
    }
]
export const TabBarList: MyRoute.RouteTabBar[] = [
    {
        path: "/home/index",
        component: Home,
        selectedIcon: require('@images/home_tab_select.png'),
        icon: require('@images/home_tab.png'),
        sceneMode: 'scroll',
        title: '首页'
    },
    {
        path: "/home/detail",
        component: Detail,
        selectedIcon: require('@images/detail_tab_select.png'),
        icon: require('@images/detail_tab.png'),
        sceneMode: 'scroll',
        title: '详情'
    },
    {
        path: "/home/list",
        component: List,
        selectedIcon: require('@images/list_tab_select.png'),
        icon: require('@images/list_tab.png'),
        sceneMode: 'scroll',
        title: '列表'
    },
    {
        path: "/home/search",
        component: Search,
        selectedIcon: require('@images/search_tab_select.png'),
        icon: require('@images/search_tab.png'),
        sceneMode: 'scroll',
        title: '搜索'
    }
]
const routes: MyRoute.RouteConfig[] = [
    {
        path: ['/home'],
        component: Index,
        redirect: '/home/index',
        tabBars: TabBarList
    },
    {
        path: "/other",
        component: Other,
    },
    {
        path: "/other1",
        sceneMode: "bottom",
        component: Other1,
    },

    {
        path: "/list",
        component: List,
    },


];

export default [...routes, ...commonRoutes];
import { lazy } from 'react';
import { MyRoute } from '../typings/router';
const Search = lazy(() => import('../pages/Search' /* webpackChunkName: "Search" */))
const List = lazy(() => import('../pages/List' /* webpackChunkName: `List` */))
const Home = lazy(() => import('../pages/Home' /* webpackChunkName: "Home" */))
const Detail = lazy(() => import('../pages/Detail' /* webpackChunkName: "Detail" */))
const Index = lazy(() => import('../pages/Index' /* webpackChunkName: "Index" */))
const Other = lazy(() => import('../pages/Other' /* webpackChunkName: "Other" */))
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
const routes: MyRoute.RouteConfig[] = [
    {
        path: ['/home'],
        component: Index,
        redirect: '/home/index',
        sceneConfig: {
            enter: 'from-right',
            exit: 'to-right'
        },
        tabBars: [
            {
                path: "/home/index",
                component: Home,
                selectedIcon: require('@images/home_tab_select.png'),
                icon: require('@images/home_tab.png'),
                title: '首页', sceneConfig: {
                    enter: 'from-right',
                    exit: 'to-right'
                },
            },
            {
                path: "/home/detail",
                component: Detail,
                selectedIcon: require('@images/detail_tab_select.png'),
                icon: require('@images/detail_tab.png'),
                title: '详情', sceneConfig: {
                    enter: 'from-right',
                    exit: 'to-right'
                },
            },
            {
                path: "/home/list",
                component: List,
                selectedIcon: require('@images/list_tab_select.png'),
                icon: require('@images/list_tab.png'),
                title: '列表', sceneConfig: {
                    enter: 'from-right',
                    exit: 'to-right'
                },
            },
            {
                path: "/home/search",
                component: Search,
                selectedIcon: require('@images/search_tab_select.png'),
                icon: require('@images/search_tab.png'),
                title: '搜索', sceneConfig: {
                    enter: 'from-bottom',
                    exit: 'to-bottom'
                },
            }
        ]
    },
    {
        path: "/other",
        component: Other,
        sceneConfig: {
            enter: 'from-right',
            exit: 'to-right'
        },
    },

    {
        path: "/list",
        component: List,
        sceneConfig: {
            enter: 'from-right',
            exit: 'to-right'
        },
    },


];

export default [...routes, ...commonRoutes];
/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-05 22:06:34
 * @LastEditors: 小白
 * @LastEditTime: 2021-10-23 14:22:08
 */
import { White } from '@/typings';
import { lazy } from 'react';
const Search = lazy(
  () => import('../pages/Search' /* webpackChunkName: "Search" */),
);
const List = lazy(() => import('../pages/List' /* webpackChunkName: `List` */));
const Home = lazy(() => import('../pages/Home' /* webpackChunkName: "Home" */));
const Detail = lazy(
  () => import('../pages/Detail' /* webpackChunkName: "Detail" */),
);
const Index = lazy(
  () => import('../pages/Index' /* webpackChunkName: "Index" */),
);
const Other = lazy(
  () => import('../pages/Other' /* webpackChunkName: "Other" */),
);
const Other1 = lazy(
  () => import('../pages/Other1' /* webpackChunkName: "Other1" */),
);
const NoFound = lazy(
  () => import('../components/NoFound' /* webpackChunkName: "NoFound" */),
);
const commonRoutes: White.RouteConfig[] = [
  {
    path: '/nofound',
    component: NoFound,
  },
  {
    path: '/',
    redirect: '/home/index',
  },
  {
    path: '/*',
    redirect: '/nofound',
  },
];
export const TabBarList: White.RouteTabBar[] = [
  {
    path: '/home/index',
    component: Home,
    icon: 'white-home1',
    sceneMode: 'scroll',
    title: '首页',
  },
  {
    path: '/home/detail',
    component: Detail,
    icon: 'white-tradingdata',
    sceneMode: 'scroll',
    title: '详情',
  },
  {
    path: '/home/list',
    component: List,
    icon: 'white-order',
    sceneMode: 'scroll',
    title: '统计',
  },
  {
    path: '/home/search',
    component: Search,
    icon: 'white-account',
    sceneMode: 'scroll',
    title: '我的',
  },
];
const routes: White.RouteConfig[] = [
  {
    path: ['/home'],
    component: Index,
    redirect: '/home/index',
    tabBars: TabBarList,
  },
  {
    path: '/other',
    component: Other,
  },
  {
    path: '/other1',
    sceneMode: 'bottom',
    component: Other1,
  },
  {
    path: '/dcotorDetail',
    component: Detail,
  },

  {
    path: '/list',
    component: List,
  },
];

export default [...routes, ...commonRoutes];

import loader from '../components/loader';
import { MyRoute } from '../typings/router';
const Search = loader(() => import('../pages/Search'))
const List = loader(() => import('../pages/List'))
const Home = loader(() => import('../pages/Home'))
const Detail = loader(() => import('../pages/Detail'))
const Index = loader(() => import('../pages/Index'))
const Other = loader(() => import('../pages/Other'))

const routes: MyRoute.RouteConfig[] = [
    {
        path: "/home",
        component: Index,
        routes: [
            {
                path: "/home/index",
                component: Home,
                selectedIcon: require('@images/home_tab_select.png'),
                icon: require('@images/home_tab.png'),
                title:'首页'
            },
            {
                path: "/home/detail",
                component: Detail,
                selectedIcon: require('@images/detail_tab_select.png'),
                icon: require('@images/detail_tab.png'),
                title:'详情'
            },
            {
                path: "/home/List",
                component: List,
                selectedIcon: require('@images/list_tab_select.png'),
                icon: require('@images/list_tab.png'),
                title:'列表'
            },
            {
                path: "/home/Search",
                component: Search,
                selectedIcon: require('@images/search_tab_select.png'),
                icon: require('@images/search_tab.png'),
                title:'搜索'
            }
        ]
    },
    {
        path: "/other",
        component: Other,
        exact: true,
    },

    {
        path: '/',
        redirect: '/home/index',
    },

];

export default routes;
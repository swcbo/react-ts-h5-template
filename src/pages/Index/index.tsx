import { TabBar } from 'antd-mobile';
import React, { useCallback, useMemo, useState } from 'react';
import { useHistory } from 'react-router';
import { MyRoute } from '../../typings/router';
import './index.scss';
const Index: React.FC<{
    routes: MyRoute.RouteChild[]
}> = ({ children, routes }) => {
    const [state, setstate] = useState(0)
    const history = useHistory()
    const OnTabClick = useCallback(
        (index, path) => {
            setstate(index)
            history.push(path)
        },
        [history],
    )
    const tabBar = useMemo(() => <TabBar
        unselectedTintColor="#888888"
        tintColor="#023059"
        barTintColor="white">
        {routes.map(({ title, path, icon, selectedIcon }, index) => (
            <TabBar.Item
                key={title}
                selected={state === index}
                onPress={() => OnTabClick(index, path)}
                icon={{ uri: icon }}
                title={title}
                selectedIcon={{ uri: selectedIcon }}>

            </TabBar.Item>))}
    </TabBar>, [state, routes, OnTabClick])
    return <div>
        {children}
        <div className="tabbar">
            {tabBar}
        </div>
    </div>
}
export default React.memo(Index)
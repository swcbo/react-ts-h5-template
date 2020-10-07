import { TabBar } from 'antd-mobile';
import React, { useCallback, useMemo, useState, useRef, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import routers from '../../routers';
import './index.scss';
const TabBarView: React.FC = () => {
    const history = useHistory()
    const location = useLocation()
    const tabBars = useRef(routers.find(v => v.tabBars)?.tabBars)
    const [state, setstate] = useState(tabBars.current?.findIndex(v => v.path === history.location.pathname))
    const OnTabClick = useCallback(
        (index, path) => {
            setstate(index)
            history.push(path)
        },
        [history],
    )
    const tabBar = useMemo(() =>
        <TabBar
            unselectedTintColor="#888888"
            tintColor="#023059"
            barTintColor="white">
            {tabBars.current?.map(({ title, path, icon, selectedIcon }, index) => (
                <TabBar.Item
                    key={title}
                    selected={state === index}
                    onPress={() => OnTabClick(index, path)}
                    icon={{ uri: icon }}
                    title={title}
                    selectedIcon={{ uri: selectedIcon }}>

                </TabBar.Item>))}
        </TabBar>,
        [state, tabBars, OnTabClick])
    const isTabBar = tabBars.current?.findIndex(v => v.path === history.location.pathname) != -1;
    return <div className={`tabbar ${isTabBar?'in_page':'out_page'}`}>
        {tabBar}
    </div>
}
export default React.memo(TabBarView)
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
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
    useEffect(() => {
        setstate(tabBars.current?.findIndex(v => v.path === location.pathname))
    }, [location])
    const isTabBar = tabBars.current?.findIndex(v => v.path === history.location.pathname) !== -1;
    return <div className={`tabBar row_center ${isTabBar ? 'in_page' : 'out_page'}`}>
        {tabBars.current?.map(({ title, path, icon }, index) => (<div className={`column_center tabBarItem ${state === index ? 'chooseed' : ''}`} key={title} onClick={() => {
            OnTabClick(index, path)
        }}>
            <i className={icon} />
            <span>{title}</span>
        </div>))}
    </div>
}
export default React.memo(TabBarView)
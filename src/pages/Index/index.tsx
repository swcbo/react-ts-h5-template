import React from 'react';
import './index.scss';
const Index: React.FC<{
    children?: React.ReactNode
}> = ({ children }) => {
    return <div className="tabbar_page">
        {children}
    </div>
}
export default React.memo(Index)
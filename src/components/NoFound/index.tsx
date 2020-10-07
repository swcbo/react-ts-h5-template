import React from 'react'
import { useHistory } from 'react-router'
import './index.scss'
const NoFound = () => {
    const history = useHistory();
    return <div className="column_center fullPage">
        <img src={require('@images/common/404.png')} alt=""></img>
        <p>Sorry,您访问的页面丢了~</p>
        <div className="back_btn" onClick={() => {
            history.replace('/')
        }}>返回首页</div>
    </div>
}
export default React.memo(NoFound)
import React from "react"
import './index.scss'
const LoadingView = () => {
    return <div className="loading_body column_center">
        <div className="la-square-jelly-box la-2x">
            <div></div>
            <div></div>
        </div>
    </div>
}
export default React.memo(LoadingView)
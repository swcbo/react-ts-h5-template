import React from "react"
import './index.scss'
export interface LoadingViewProps {
    className?: string
    style?: string
    height?: number
    width?: number
    isPage?: boolean
}

const LoadingView: React.FC<LoadingViewProps> = ({ className, width, height, isPage }) => {
    return <div className={`column_center fullBody ${className ?? (isPage && 'page_loading_body')}`} >
        <div className="la-square-jelly-box" style={{ height: height ?? 64, width: width ?? 64 }}>
            <div></div>
            <div></div>
        </div>
    </div>

}
export default React.memo(LoadingView)
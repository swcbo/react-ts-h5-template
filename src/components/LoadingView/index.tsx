import React from "react"
import ReactDOM from "react-dom"
import './index.scss'
export interface LoadingViewProps {
    className?: string
    style?: string
    height?: number
    width?: number
}
const modalRoot = document.getElementById('modal-root')
const LoadingView: React.FC<LoadingViewProps> = ({ className, width, height }) => {
    return ReactDOM.createPortal(<div className={`column_center ${className ?? 'loading_body'}`}>
        <div className="la-square-jelly-box" style={{ height: height ?? 64, width: width ?? 64 }}>
            <div></div>
            <div></div>
        </div>
    </div>, modalRoot!!)

}
export default React.memo(LoadingView)
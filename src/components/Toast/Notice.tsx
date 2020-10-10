import { White } from '@/typings'
import React from 'react'
const icons = {
    info: 'white-RectangleCopy3',
    success: 'white-RectangleCopy1',
    warning: 'white-RectangleCopy2',
    fail: 'white-RectangleCopy',
    loading: 'white-loading'
}
const Notice: React.VFC<White.NoticeProps> = ({ type, content }) => {
    return (
        <div className={`toast-notice ${type} column_center`}>
            <i className={`${icons[type]} icon`}></i>
            <span>{content}</span>
        </div>
    )
}
export default React.memo(Notice)
import { NoticeProps } from '@/typings/notice'
import React from 'react'
const icons = {
    info: 'icon-info-circle-fill',
    success: 'icon-check-circle-fill',
    warning: 'icon-warning-circle-fill',
    fail: 'icon-close-circle-fill',
    loading: 'icon-loading'
}
const Notice: React.VFC<NoticeProps> = ({ type, content }) => {
    return (
        <div className={`toast-notice ${type} column_center`}>
            <svg className="icon" aria-hidden="true">
                <use xlinkHref={`#${icons[type]}`} />
            </svg>
            <span>{content}</span>
        </div>
    )
}
export default React.memo(Notice)
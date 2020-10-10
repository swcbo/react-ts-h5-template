import { White } from "@/typings"
import createNotifiCation from "./Notification"

let notification: White.NotifiCation | null = null
const notice = (notice: White.NoticeProps) => {
    if (!notification) notification = createNotifiCation
    return notification.addNotice(notice)
}
const hideAllNotice = () => {
    if (!notification) notification = createNotifiCation
    return notification.removeAll()
}

export default {
    success: (content = '成功', onClose?: () => void) => notice({ content, type: 'success', duration: 1000, onClose }),
    fail: (content = '失败', onClose?: () => void) => notice({ content, type: 'fail', duration: 1000, onClose }),
    info: (content: string, onClose?: () => void) => notice({ content, type: 'info', duration: 1000, onClose }),
    warning: (content: string, onClose?: () => void) => notice({ content, type: 'warning', duration: 1000, onClose }),
    loading: (content = '加载中...', onClose?: () => void) => notice({ content, type: 'loading', duration: 0, onClose }),
    hide: () => hideAllNotice()
}
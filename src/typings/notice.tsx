export interface NoticeProps {
    key?: string;
    content?: string;
    type: 'loading' | 'success' | 'fail' | 'warning' | 'info'
    duration: number
    onClose?: () => void
}
export interface WhiteNotifiCation extends NotifiCationRef {
    destroy: () => void
}
export interface NotifiCationProps {

    transitionTime?: number
    duration?: number

}

export interface NotifiCationRef {
    addNotice: (notice: NoticeProps) => () => void
    removeAll: () => void
}
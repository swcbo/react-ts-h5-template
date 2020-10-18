import { White } from "@/typings"
import React, { createRef, forwardRef, useCallback, useImperativeHandle, useState } from "react"
import ReactDOM from "react-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import './index.scss'
import Notice from './Notice'


const NotifiCation = forwardRef<White.NotifiCationRef, White.NotifiCationProps>(({ transitionTime = 300 }, ref) => {
    const [notices, setNotice] = useState<White.NoticeProps[]>([])
    const removeNotice = useCallback(
        (key: string) => {
            setNotice(notices.filter(notice => {
                if (notice.key === key) {
                    if (notice.onClose) {
                        let timer = setTimeout(() => {
                            clearTimeout(timer)
                            notice.onClose!!()
                        }, transitionTime)
                    }
                    return false
                }
                return true
            }))

        },
        [notices, transitionTime],
    )
    useImperativeHandle(ref, () => ({
        addNotice: (notice: White.NoticeProps) => {
            notice.key = `notice_${new Date().getTime()}_${notices.length}`
            if (notices.findIndex(v => v.key !== notice.key) === -1) {
                if (notice.type === 'loading') {
                    let timer = setTimeout(() => {
                        clearTimeout(timer)
                        setNotice([...notices, notice])
                    }, transitionTime);
                } else {
                    setNotice([...notices, notice])
                }
                if (notice.duration > 0) {
                    let timer = setTimeout(() => {
                        clearTimeout(timer)
                        removeNotice(notice.key!!)
                    }, notice.duration)
                }
            }
            return () => {
                removeNotice(notice.key!!)
            }

        },
        removeAll: () => {
            notices.forEach(v => {
                v.onClose && v.onClose()
            })
            setNotice([])
        }
    }), [notices, transitionTime, removeNotice]);

    const haveLoading = notices.find(v => v.type === 'loading')
    return <TransitionGroup className="toast-notification column_center" style={{ pointerEvents: !haveLoading ? 'none' : 'auto' }}>
        {
            notices.map(v => <CSSTransition
                key={v.key}
                classNames="toast-notice-wrapper notice"
                timeout={transitionTime}>
                <Notice {...v} />
            </CSSTransition>)
        }
    </TransitionGroup>
})

const createNotifiCation = (): White.NotifiCation => {
    const ref = createRef<White.NotifiCationRef>()
    const modalRoot = document.getElementById('modal-root')
    ReactDOM.render(<NotifiCation ref={ref} />, modalRoot!!)
    return {
        addNotice: (notice: White.NoticeProps) => ref.current!!.addNotice(notice),
        removeAll: () => ref.current?.removeAll(),
        destroy() {
            ReactDOM.unmountComponentAtNode(modalRoot!!)
            document.body.removeChild(modalRoot!!)
        }
    }

}
export default createNotifiCation()
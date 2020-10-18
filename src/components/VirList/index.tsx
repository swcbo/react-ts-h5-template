import useDebounce from '@/hooks/useDebounce'
import useThrottle from '@/hooks/useThrottle'
import Toast from '@/layout/Toast'
import { White } from '@/typings'
import React, { useCallback, useEffect, useRef, useState, useMemo, memo } from 'react'
import LoadingView from '../LoadingView'
import './index.scss'
const VirList: React.FC<White.VirListProps>
    = ({ list = [], itemH, itemRender, wrapNum = 1, loadMoreHieght = 50, wrapperClass, isEndLoad, refreshHeight = 100, pageSize = 10 }) => {
        const page = useRef(1)
        const itemList = useRef(list.slice(0, pageSize))
        const viewCount = useRef(0)
        const moveStart = useRef(0)//当前手指位置
        const onRefresh = useRef(false)//当前手指位置
        const moveLast = useRef(0)//当前离开
        const wrapperRef = useRef<any>()
        const [showLoadMore, setLoadMore] = useState(false)
        const [virObject, setVirObject] = useState<{ data: any[], transform: number }>({ data: itemList.current, transform: 0 })

        const totalHeight = useMemo(() => () => {
            return itemH * itemList.current.length / wrapNum + loadMoreHieght
        }, [itemList, itemH, wrapNum, loadMoreHieght])

        // 判断显示多少个布局
        useEffect(() => {
            viewCount.current = Math.ceil(wrapperRef.current.clientHeight / itemH)
        }, [itemH, wrapperRef])

        // 移动内容布局
        const toMoveWapper = useCallback(() => {
            const start = Math.floor(wrapperRef.current.scrollTop / itemH);
            const end = start + viewCount.current;
            const viewData = itemList.current.slice((!start ? start : start - 1) * wrapNum, (end === itemList.current.length ? end : end + 1) * wrapNum);
            setVirObject({
                data: viewData,
                transform: start * itemH
            })
        }, [viewCount, wrapperRef, itemList, itemH, wrapNum])

        //监听加载更多
        useEffect(() => {
            if (showLoadMore && page.current * pageSize < list.length) {
                Toast.loading()
                setTimeout(() => {
                    page.current = page.current + 1
                    itemList.current = list.slice(0, pageSize * page.current)
                    toMoveWapper()
                    Toast.hide()
                }, 1000);
            }
        }, [showLoadMore, page, list])

        // 刷新方法
        const handleRefresh = useCallback(async () => {
            setTimeout(() => {
                page.current = 1;
                itemList.current = list.slice(0, pageSize)
                toMoveWapper()
                Toast.hide()
            }, 1000);
        }, [toMoveWapper, list])



        // 滚动列表
        const handleScroll = useThrottle(() => {
            const scrollTop = wrapperRef.current.scrollTop
            const loadMore = scrollTop >= totalHeight() - wrapperRef.current.clientHeight
            if (loadMore && !showLoadMore) {
                setLoadMore(true)
            } else if (!loadMore && showLoadMore) {
                setLoadMore(false)
            }
            if (scrollTop < 0 || showLoadMore || onRefresh.current) return
            toMoveWapper()
        }, 0, [showLoadMore, wrapperRef, totalHeight, onRefresh, toMoveWapper])

        // 移动监听
        const handleTouchMove = useThrottle((pageY: number) => {
            moveLast.current = pageY
            const moveY = (pageY - moveStart.current) / 2
            if (moveY > 0 && wrapperRef.current.scrollTop <= 0 && virObject.transform < moveY) {
                onRefresh.current = true
                if (moveY < refreshHeight) {
                    setVirObject({
                        ...virObject,
                        transform: moveY
                    })
                }
            } else {
                onRefresh.current = false
            }

        }, 16.5, [moveStart, virObject, refreshHeight, wrapperRef])
        // 移动开始
        const handleStartMove = useCallback((event: any) => {
            moveStart.current = event.targetTouches[0].pageY;
        }, [])
        // 移动结束清空
        const handleEndMove = useDebounce(async () => {
            if (wrapperRef.current.scrollTop <= 0) {
                const moveY = (moveLast.current - moveStart.current) / 2
                const endMove = moveY < refreshHeight ? 0 : refreshHeight
                setVirObject({
                    ...virObject,
                    transform: endMove
                })
                if (endMove) {
                    Toast.loading()
                    await handleRefresh()
                }

            }

        }, 16.5, [virObject, moveLast, moveStart, refreshHeight, handleRefresh, wrapperRef])
        const isRefresh = onRefresh.current
        return <div className={`vir_list ${wrapperClass}`}
            onScroll={handleScroll}
            onTouchMove={(e) => handleTouchMove(e.targetTouches[0].pageY)}
            onTouchStart={handleStartMove}
            onTouchEnd={handleEndMove}
            ref={wrapperRef} >
            <div className={`virtual-list-height`} style={{ height: totalHeight() }} />
            <div className={`view-content ${wrapNum > 1 && 'row_wrap'}`} style={{ transform: `translate3d(0, ${virObject.transform}px, 0)`, transition: isRefresh ? 'all 0.0065s' : 'none', marginTop: -refreshHeight }}>
                <div className="refresh_view row_center" style={{ height: refreshHeight, opacity: isRefresh ? 1 : 0 }}>{
                    <div className="column_center">
                        <LoadingView height={24} width={24} />
                        <span className="hint_view">刷新中...</span>
                    </div>
                }</div>
                {
                    virObject.data.map((val, index) => itemRender(val, index))
                }
                <div style={{ height: loadMoreHieght, width: '100%', color: '#999', opacity: showLoadMore ? 1 : 0 }} className="row_center">
                    {(isEndLoad || list.length === itemList.current.length) ? '----到底了----' : <LoadingView height={24} width={24} />}
                </div>
            </div>
        </div>

    }

export default memo(VirList)
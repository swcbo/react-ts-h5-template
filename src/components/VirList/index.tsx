import useThrottle from '@/hooks/useThrottle'
import { White } from '@/typings'
import React, { useEffect, useRef, useState } from 'react'
import LoadingView from '../LoadingView'
import './index.scss'
const VirList: React.FC<White.VirListProps>
    = ({ list, itemH, itemRender, wrapNum = 1, loadMoreHieght = 50, wrapperClass, isEndLoad }) => {
        const totalHeight = useRef(itemH * list.length / wrapNum + loadMoreHieght)
        const viewCount = useRef(0)
        const wrapperRef = useRef<any>()
        const [showLoadMore, setLoadMore] = useState(false)
        const [virObject, setVirObject] = useState<{ data: any[], transform: string }>({ data: list, transform: 'translate3d(0, 0, 0)' })
        useEffect(() => {
            viewCount.current = Math.ceil(wrapperRef.current.clientHeight / itemH)
        }, [itemH, wrapperRef])

        const handleScroll = useThrottle(
            (scrollTop: number) => {
                const loadMore = scrollTop >= totalHeight.current - wrapperRef.current.clientHeight
                if (loadMore && !showLoadMore) {
                    setLoadMore(true)
                } else if (!loadMore && showLoadMore) {
                    setLoadMore(false)
                }
                if (scrollTop < 0 || showLoadMore) return
                const start = Math.floor(scrollTop / itemH);
                const end = start + viewCount.current;
                const viewData = list.slice((!start ? start : start - 1) * wrapNum, (end === list.length ? end : end + 1) * wrapNum);
                setVirObject({
                    data: viewData,
                    transform: `translate3d(0, ${start * itemH}px, 0)`
                })
            }, 0, [list, viewCount, wrapNum, itemH, showLoadMore, wrapperRef, totalHeight])

        return <div className={`vir_list ${wrapperClass}`} onScroll={(e: any) => {
            handleScroll(e.target.scrollTop)
        }} ref={wrapperRef} >
            <div className={`virtual-list-height`} style={{ height: totalHeight.current }} />
            <div className={`view-content ${wrapNum > 1 && 'row_wrap'}`} style={{ transform: virObject.transform }}>
                {
                    virObject.data.map((val, index) => itemRender(val, index))
                }
                <div style={{ height: loadMoreHieght, width: '100%', color: '#999' }} className="row_center">
                    {showLoadMore ? isEndLoad ? '加载更多...' : <LoadingView height={24} width={24}/> : ''}
                </div>
            </div>
            </div>

    }

export default VirList
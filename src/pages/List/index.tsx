import useAxios from '@/hooks/useAxios'
import Axios from 'axios'
import React, { useEffect } from 'react'
import { FixedSizeGrid } from 'react-window';
import { useHistory } from 'react-router-dom'
import AutoSizer from "react-virtualized-auto-sizer";
import './index.scss'
const List: React.FC = () => {
    const history = useHistory()
    const { reponse, doAxios } = useAxios<any>(() => Axios.get<any>('https://csdnxiaofu.huangb.top/iconfont.json'), [])
    useEffect(() => {
        doAxios()
    }, [doAxios])
    const rowRenderer = ({ columnIndex, rowIndex, style }: any) => {
        const val = reponse.glyphs[rowIndex*3+columnIndex]
        return <div key={`${columnIndex}_${rowIndex}`} className={`icon_item column_between`} style={style}>
            <i className={`${reponse && reponse.css_prefix_text}${val.font_class}`}></i>
            <span>{val.name}</span>
        </div>
    }

    return <div onClick={() => history.push('/other')}>
        {reponse &&
            <AutoSizer>
                {({ height, width }) => {
                    return <FixedSizeGrid
                        height={height}
                        width={width}
                        columnCount={3}
                        columnWidth={width / 3}
                        rowCount={parseInt(`${reponse.glyphs.length / 3}`)}
                        rowHeight={100}
                    >
                        {rowRenderer}
                    </FixedSizeGrid>
                }}
            </AutoSizer>
        }
    </div>
}
export default React.memo(List)
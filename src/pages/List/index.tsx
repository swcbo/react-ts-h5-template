import VirList from '@/components/VirList'
import useAxios from '@/hooks/useAxios'
import Axios from 'axios'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './index.scss'
const List: React.FC = () => {
    const history = useHistory()
    const { reponse, doAxios } = useAxios<any>(() => Axios.get<any>('https://csdnxiaofu.huangb.top/iconfont.json'), [])
    useEffect(() => {
        doAxios()
    }, [doAxios])
    const rowRenderer = (val: any) => <div key={val.icon_id} className='icon_item column_between'>
        <i className={`${reponse && reponse.css_prefix_text}${val.font_class}`}></i>
        <span>{val.name}</span>
    </div>
    return <div onClick={() => history.push('/other')}>
        {reponse && <VirList itemRender={rowRenderer} list={reponse.glyphs} itemH={100} wrapNum={3} wrapperClass="wrapperList" pageSize={25} />}
    </div>
}
export default React.memo(List)
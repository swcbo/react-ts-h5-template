import IconList from '@/assets/fonts/iconfont.json'
import VirList from '@/components/VirList'
import React from 'react'
import { useHistory } from 'react-router-dom'
import './index.scss'
const List: React.FC = () => {
    const history = useHistory()
    const rowRenderer = (val: any) => <div key={val.icon_id} className='icon_item column_between'>
        <i className={`${IconList.css_prefix_text}${val.font_class}`}></i>
        <span>{val.name}</span>
    </div>
    return <div onClick={() => history.push('/other')}>
        <VirList itemRender={rowRenderer} list={IconList.glyphs} itemH={100} wrapNum={3} wrapperClass="wrapperList" />
    </div>
}
export default React.memo(List)
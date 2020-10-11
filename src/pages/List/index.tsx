import LazyImage from '@/components/LazyImage'
import React from 'react'
import { useHistory } from 'react-router-dom'
const List: React.FC = () => {
    const history = useHistory()
    return <div onClick={() => history.push('/other')} style={{ backgroundColor: 'green' }}>
        <LazyImage src="http://ces.cdn.huangb.top/FhoBuqs4aUVefhmw3SfGqm7c9FQk" height={200} width={200}></LazyImage>
        <LazyImage src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2090550243,722151551&fm=26&gp=0.jpg" height={200} width={200}></LazyImage>
        <LazyImage src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1700015907,495722324&fm=26&gp=0.jpg" height={200} width={200}></LazyImage>
        <LazyImage src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1725415784,3706433400&fm=26&gp=0.jpg" height={200} width={200}></LazyImage>
        <LazyImage src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2911678812,1229035726&fm=26&gp=0.jpg" height={200} width={200}></LazyImage>
        <LazyImage src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3774043782,88580761&fm=26&gp=0.jpg" height={200} width={200}></LazyImage>
        <LazyImage src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1566368924,1143628635&fm=26&gp=0.jpg" height={200} width={200}></LazyImage>
        <LazyImage src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2879430259,1145403574&fm=26&gp=0.jpg" height={200} width={200}></LazyImage>

    </div>
}
export default React.memo(List)
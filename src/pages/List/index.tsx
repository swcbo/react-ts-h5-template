import React from 'react'
import { useHistory } from 'react-router'
const List: React.FC = () => {
    const history = useHistory()
    return <div className="tabbar_page" style={{ backgroundColor: "red" }} onClick={() => history.push('/other')}>List</div>
}
export default React.memo(List)
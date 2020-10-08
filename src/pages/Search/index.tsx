import React from 'react'
import { useHistory } from 'react-router'
const Search = () => {
    const history = useHistory()
    return <div className="tabbar_page" style={{ backgroundColor: 'blue' }} onClick={() => history.push('/other1')}>Search</div>
}
export default React.memo(Search)
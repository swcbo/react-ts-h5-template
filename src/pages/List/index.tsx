import React from 'react'
import { useHistory } from 'react-router-dom'
const List: React.FC = () => {
    const history = useHistory()
    return <div onClick={() => history.push('/other')} style={{ backgroundColor: 'green' }}>
    </div>
}
export default React.memo(List)
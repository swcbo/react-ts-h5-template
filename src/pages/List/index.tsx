import Toast from '@/layout/Toast'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
const List: React.FC = () => {
    const history = useHistory()
    useEffect(() => {
        Toast.success()
    }, [])
    return <div onClick={() => history.push('/other')} style={{ backgroundColor: 'green' }}>
    </div>
}
export default React.memo(List)
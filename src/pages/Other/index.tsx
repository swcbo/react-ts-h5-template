import React from 'react'
import { useHistory } from 'react-router-dom'
const Other = () => {
   const history =  useHistory()
    return <div  onClick={() => history.goBack()} style={{backgroundColor:'red'}}>Other</div>
}
export default React.memo(Other)
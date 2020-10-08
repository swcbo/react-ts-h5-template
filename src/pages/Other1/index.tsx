import React from 'react'
import { useHistory } from 'react-router'
const Other = () => {
   const history =  useHistory()
    return <div  onClick={() => history.goBack()} style={{backgroundColor:'yellow'}}>Other1</div>
}
export default React.memo(Other)
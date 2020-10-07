import React from 'react'
import { useHistory } from 'react-router'
const Other = () => {
   const history =  useHistory()
    return <div className="tabbar_page" style={{ backgroundColor: "blue" }} onClick={() => history.goBack()}>Other</div>
}
export default React.memo(Other)
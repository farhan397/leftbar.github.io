import React from 'react'

const View = ({userinfo,deleteuserinfo,edituserinfo}) => {
  return userinfo.map(userinformation=>(
    <tr key={userinformation.userNames}>
            <td>{userinformation.userNames}</td>
            <td>{userinformation.useremails}</td>
            
            <td>{userinformation.userphone}</td>
            <td>
              <button className='edit' 
               onClick={()=>edituserinfo(userinformation.userNames,userinformation.useremails,userinformation.userpass,userinformation.userphone)}
                type='button'>Edit</button>
            </td>
            <td>
              <button className='delete' onClick={()=>deleteuserinfo(userinformation.useremails)}  type='button'>Delete</button>
            </td>
                   
        </tr>          
  ))
}

export default View

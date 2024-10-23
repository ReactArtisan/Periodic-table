import React from 'react'

function Test({setIsRead,isRead}) {
    const getPayment=()=>{
        console.log("setIsRead",setIsRead,isRead)
    }
  return (
    <div>{getPayment()}</div>
  )
}

export default Test
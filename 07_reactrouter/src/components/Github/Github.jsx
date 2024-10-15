import React, { useState,useEffect } from 'react'

function Github() {
    const [data,setData]=useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/hiteshchoudhary')
     .then((res)=>res.json())
     .then((data)=>{
        console.log(data);
        setData(data);
     })
    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt='github pic' width='300' height='100'/>
    </div>
  )
}

export default Github
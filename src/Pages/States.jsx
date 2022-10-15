import { useState } from "react"
import { useEffect } from "react"
import React from 'react'

const States = () => {

      
        const [resourceType, setResourceType] = useState('posts')

        const [items,setItems] = useState([])
      
        useEffect(() =>{
          fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
          .then(response => response.json())
          .then(json => setItems(json))
        },[resourceType])
    
  return (
    <div>

      <div className="change">
        <button onClick={()=> setResourceType('posts')}>Posts</button>
        <button onClick={()=> setResourceType('users')}>Users</button>
        <button onClick={()=> setResourceType('comments')}>Comments</button>
      
    </div>

    <h1>{resourceType}</h1>
    {items.map(item =>{
      return <p>{JSON.stringify(item)}</p>
    })}

    </div>
  )
}

export default States
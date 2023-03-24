import React, { useState } from 'react'
import { Testing } from '../assets/components/Testing'
import { StorageContext } from '../Context/StorageContext'

export const Childern = () => {
    const [first, setfirst] = useState("")

   


  return (
    <div>
    <StorageContext/>


    <h1>{first}</h1>
    <Testing  SetTest={setfirst} />
    </div>
  )
}

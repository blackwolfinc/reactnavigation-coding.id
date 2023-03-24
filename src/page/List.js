import React from 'react'
import { useGetData } from '../Context/StorageContext'

export const List = () => {
    const datavalue = useGetData()
    console.log(datavalue , "datavalue")
    
    const renderData = ()=>{

       return datavalue.map((value)=>{
        console.log(value , "va")
            return <h1>{value.text}</h1>
        })
    }


  return (
    <div>{renderData()}</div>
  )
}

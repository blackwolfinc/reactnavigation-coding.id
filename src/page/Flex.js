import React, { useContext, useState } from 'react'
import { useGetData } from '../Context/StorageContext'


export const Flex = () => {
  const datavalue = useGetData()
  console.log(datavalue , "theme")
  return (
    <div>
    tes


    </div>)
}


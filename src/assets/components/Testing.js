import React from 'react'

export const Testing = (props) => {
    console.log(props , "props")
    let Data = "aku adalah anak gembala "



  return (
    <div> <button onClick={()=>{
        props.SetTest(Data)
    }}>Lempar data</button></div>
   
  )
}

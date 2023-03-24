// import React from 'react'
// import PropTypes from 'prop-types'




import PropTypes from 'prop-types'
import React from 'react'

 const TestingPropsType = ({data , number ,array  }) => {

  return (

    <div>{data} {number} {array}</div>
  )
}

TestingPropsType.propTypes={
    data : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
       
      ]) ,
    number : PropTypes.number,
    array : PropTypes.array
}



export default TestingPropsType
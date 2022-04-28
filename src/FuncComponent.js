import React from 'react'

const FuncComponent = (props) => {
    // console.log(props);
    return(
        <div>
         <h2>This is functional Component</h2>
         <h3>The Course Name is {props.courseName} and duration is {props.duration}</h3>
         </div>
    )
}

export default FuncComponent;
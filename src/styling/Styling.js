import React from 'react'
import './Styling.css'
import styles from './homestyles.module.css'


const heading = {
    backgroundColor:"green",
    color:"blue",
    fontSize : "25px"
}


function Styling() {
  return (
    <div>
        <h2>Stylesheet</h2>
        {/* 
            - css stylesheet
            - inline stylings
            - css Modules
        */}
        {/* inline stylings */}
        <h2 style= {{color:"red",backgroundColor:"blue"}}>This is stylings</h2>
        <h2 style={heading}>This is Internal Styling</h2>
        <h2 className='externalcs'>This is External css</h2>
        <h2 className={styles.modulecs}>This is Module Css</h2>
    </div>
  )
}

export default Styling
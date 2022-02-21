import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hexColor}) => {

  const [alert,setAlert] = useState(false);
  const bcg = rgb.join(','); //To convert the values from array to string
  const hex = rgbToHex(...rgb);
  const hexValue =  `#${hexColor}`;

  useEffect(()=> {
    const timeout = setTimeout(()=> {
      setAlert(false)
    },3000)
    return ()=>clearTimeout(timeout) //To clear up the first timeout before you set up another one
  },[alert]); //Once the alert changes, we want to run this function

  return (

    <article 
      className={`color ${index > 10 && 'color-light'}`} 
      style={{backgroundColor:`rgb(${bcg})`}}
      onClick={()=> {
        setAlert(true);
        navigator.clipboard.writeText(hexValue); //To copy hex value to clipboard
      }}
      >
      
       <p className='percent-value'> {weight}% </p>
       <p className='color-value'> {hexValue} </p>
       {alert && <p className='alert'>copied to clipboard</p>}

    </article>
    
    // <p className='color-value'> {hex} </p>. Alternative hex display
    // We don't need the hexValue code if we're using hex from the rgbToHex function because the # already comes with it. You can check by console.logging hex

  ) 
}

export default SingleColor

//You can access the hex code by either using the function rgbToHex from './utils' above or the value that the library provides 
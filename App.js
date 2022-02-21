import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color,setColor] = useState('')
  const [error,setError] = useState(false)
  const [list,setList] = useState(new Values('#f15025').all(10)) //To give it an initial colour to display. You can also decide to make it blank by giving it an empty array value

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10); //The 10 value means 100% divided by 10 which would show deviations of the colour in terms of 10 i.e 100%,90%,80%,etc. If it was 20, it would have been 100%,80%,60%,etc so we'll have lesser values(10 values; 5 lighter, 5 darker i.e 100% to 0% for light shade and 0% to 100% for darker shades)
      setList(colors)
      setError(false)
    }
    catch(error) {
      setError(true)
      console.log(error)
    }
  }

  return (

    <> 
    
    <section className='container'>

      <h3>color generator</h3>

      <form onSubmit={handleSubmit}>

        <input 
          type='text'
          className={`${error?'error':null}`}
          value={color}
          onChange={(e)=>setColor(e.target.value)}
          placeholder='#f15025'
          /> 

      <button className='btn' type='submit'>submit</button>

      </form>

    </section>

    <section className='colors'>

      {list.map((color,index) => {
        
          return <SingleColor 
                    key={index} 
                    {...color} 
                    index={index}
                    hexColor={color.hex}
                    />
      })}

    </section>

    </>

    
    ) 
}

export default App

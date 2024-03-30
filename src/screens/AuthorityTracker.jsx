// Import React
import React, { useState, useEffect } from 'react'
// Import Component
import TrackerSub from '../components/TrackerSub'
// Import SCSS
import './AuthorityTracker.scss'


export default function AuthorityTracker() {
  
  const [ windowMod, setWindowMod ] = useState({
    x: 0,
    y: 0
  })
  
  // Size of Window
  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight
  })

  // Update size object when window is resized
  function updateSize () {
    setSize({
      x: window.innerWidth,
      y: window.innerHeight
    })
  }
  
  // Sets Window Size
  useEffect(() => (
    window.onresize = updateSize
  ), [])
  
  // Sets Modifier
  useEffect(() => (
    modifier()
  ),[size])

  function modifier () {
    let baseX = 1200
    let baseY = 800
    setWindowMod({
      x: parseInt(window.innerWidth) / baseX,
      y: parseInt(window.innerHeight) / baseY
    })
  }
      
  const info = [
    {
      title: "Player 1: Authority",
      theme: "rgb(0, 255, 115)",
      resetVal: 50,
    },
    {
      title: "Player 2: Authority",
      theme: "rgb(0, 255, 115)",
      resetVal: 50,
    },
    {
      title: "Player 3: Authority",
      theme: "rgb(0, 255, 115)",
      resetVal: 50,
    },
    {
      title: "Player 4: Authority",
      theme: "rgb(0, 255, 115)",
      resetVal: 50,
    },
  ]

  return (
    <div className='authoritytracker-container'>
      <div className='authoritytracker-subcontainer'>
        <TrackerSub 
          windowMod={windowMod} 
          title={info[0].title}
          theme={info[0].theme}
          resetVal={info[0].resetVal}
        />
        <TrackerSub 
          windowMod={windowMod} 
          title={info[2].title}
          theme={info[2].theme}
          resetVal={info[2].resetVal}
        />
      </div>
      <div className='authoritytracker-subcontainer'>
        <TrackerSub 
          windowMod={windowMod} 
          title={info[1].title}
          theme={info[1].theme}
          resetVal={info[1].resetVal}
        />
        <TrackerSub 
          windowMod={windowMod} 
          title={info[3].title}
          theme={info[3].theme}
          resetVal={info[3].resetVal}
        />
      </div>
    </div>
  )
}

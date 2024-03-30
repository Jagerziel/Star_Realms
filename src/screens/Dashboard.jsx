// Import React
import React, { useState, useEffect } from 'react'
// Import Component
import TrackerMain from '../components/TrackerMain.jsx'
import TrackerSub from '../components/TrackerSub.jsx'

// Import SCSS
import './Dashboard.scss'

export default function Dashboard() {
  const [ windowMod, setWindowMod ] = useState({
    x: 0,
    y: 0
  })
  
  // Size of Window
  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight
  })
  
  const info = [
    {
      title: "Trade",
      theme: "rgb(255, 255, 115)",
      resetVal: 0,
    },
    {
      title: "Combat",
      theme: "rgb(255, 70, 70)",
      resetVal: 0,
    },
  ]

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
      
  // console.log(size)
  // console.log(windowMod)
  
  
  return (
    <div className='dashboard-container'>
      <div className='dashboard-left-container'>
        <TrackerMain windowMod={windowMod} />
      </div>
      <div className='dashboard-right-container'>
        <TrackerSub 
          windowMod={windowMod} 
          title={info[0].title}
          theme={info[0].theme}
          resetVal={info[0].resetVal}
        />
        <TrackerSub 
          windowMod={windowMod} 
          title={info[1].title}
          theme={info[1].theme}
          resetVal={info[1].resetVal}
        />
      </div>
    </div>
  )
}

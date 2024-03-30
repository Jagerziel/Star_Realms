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
      title: "Player 1",
      theme: "rgb(0, 255, 115)",
      resetVal: 30,
    },
    {
      title: "Player 2",
      theme: "rgb(0, 255, 115)",
      resetVal: 30,
    },
    {
      title: "Player 3",
      theme: "rgb(0, 255, 115)",
      resetVal: 30,
    },
    {
      title: "Player 4",
      theme: "rgb(0, 255, 115)",
      resetVal: 30,
    },
  ]

  return (
    <div>Authority Tracker</div>
  )
}

// Import React
import { Route, Routes } from 'react-router-dom'
// Import Components
import Home from './screens/Home.jsx'
import Dashboard from './screens/Dashboard.jsx'
import AuthorityTracker from './screens/AuthorityTracker.jsx'
// Import Styling
import './App.scss'

function App() {

  return (
    <>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/authoritytracker" element={<AuthorityTracker />} />
        </Routes>
      </div>
    </>
  )
}

export default App

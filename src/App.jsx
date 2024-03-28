// Import React
import { Route, Routes } from 'react-router-dom'
// Import Components
import Home from './screens/Home.jsx'
import Dashboard from './screens/Dashboard.jsx'
import AuthorityTracker from './screens/AuthorityTracker.jsx'
import Navbar from './components/Navbar.jsx'
// Import Styling
import './App.scss'

function App() {

  return (
    <>
      <Navbar />
      <div className='App'>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/authoritytracker" element={<AuthorityTracker />} />
        </Routes>
      </div>
    </>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Nahian from './pages/Nahian'
import Nowshin from './pages/Nowshin'
import Gallery from './pages/Gallery'
import Timeline from './pages/Timeline'
import BirthdayCard from './pages/BirthdayCard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="nahian" element={<Nahian />} />
        <Route path="nowshin" element={<Nowshin />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="card" element={<BirthdayCard />} />
      </Route>
    </Routes>
  )
}

export default App

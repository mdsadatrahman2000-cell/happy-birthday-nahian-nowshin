import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Sparkles from './Sparkles'

export default function Layout() {
  return (
    <div className="min-h-screen bg-cream relative">
      <Sparkles />
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

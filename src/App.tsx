import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import AllProjects from './pages/all-projects'
import NotFound from './pages/not-found'

function App() {
  return (
    <main className="flex flex-col w-full gap-7 max-w-6xl justify-center items-center mb-24">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App

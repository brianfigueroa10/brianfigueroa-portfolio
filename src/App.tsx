import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import AllProjects from './pages/all-projects'
import NotFound from './pages/not-found'

function App() {
  return (
    <main className="flex flex-col w-full gap-7  justify-center items-center">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App

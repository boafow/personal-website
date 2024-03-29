import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

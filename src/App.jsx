import { Route, Routes } from 'react-router';
import './index.css';
import HomePage from './app/page';
import AboutPage from './app/about/page';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App

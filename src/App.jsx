import { Route, Routes } from 'react-router';
import './index.css';
import HomePage from './app/page';
import AboutPage from './app/about/page';
import Navbar from './components/layout/Navbar';
import UserPage from './app/user/page';
import Dashboard from './app/dashboard/page';
import Settings from './app/dashboard/settings/page';
import Posts from './app/dashboard/posts/page';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/user/:id' element={<UserPage />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="settings" element={<Settings />} />
          <Route path="posts" element={<Posts />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

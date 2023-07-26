import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Home } from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProd from './pages/CompareProd';
import WishList from './pages/WishList';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='store' element={<OurStore />}/>
            <Route path='blogs' element={<Blog />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='compare-product' element={<CompareProd />}/>
            <Route path='wishlist' element={<WishList />}/>
            <Route path='login' element={<Login />}/>
            <Route path='forgot-password' element={<ForgotPassword />}/>
            <Route path='signup' element={<Signup />}/>
            <Route path='reset-password' element={<ResetPassword />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

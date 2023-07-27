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
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndContion from './pages/TermAndContion';
import SingleProd from './pages/SingleProd';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='product' element={<OurStore />}/>
            <Route path='/:id' element={<SingleProd />}/>
            <Route path='blogs' element={<Blog />}/>
            <Route path='blogs/:id' element={<SingleBlog />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='compare-product' element={<CompareProd />}/>
            <Route path='wishlist' element={<WishList />}/>
            <Route path='login' element={<Login />}/>
            <Route path='forgot-password' element={<ForgotPassword />}/>
            <Route path='signup' element={<Signup />}/>
            <Route path='reset-password' element={<ResetPassword />}/>
            <Route path='privacy-policy' element={<PrivacyPolicy />}/>
            <Route path='refund-policy' element={<RefundPolicy />}/>
            <Route path='shipping-policy' element={<ShippingPolicy />}/>
            <Route path='term-conditions' element={<TermAndContion />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

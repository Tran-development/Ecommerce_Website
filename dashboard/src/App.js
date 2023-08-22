import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import MainLayout from './components/MainLayout';
import Enquiries from './pages/Enquiries';
import BlogList from './pages/BlogList';
import BlogCatList from './pages/BlogCatList';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Colorlist from './pages/Colorlist';
import CategoryList from './pages/CategoryList';
import BrandList from './pages/BrandList';
import ProductList from './pages/ProductList';
import AddBlog from './pages/AddBlog';
import AddBlogCat from './pages/AddBlogCat';
import AddColor from './pages/AddColor';
import AddCat from './pages/AddCat';
import AddBrand from './pages/AddBrand';
import AddProduct from './pages/AddProduct';
import AddCoupon from './pages/AddCoupon';
import CouponList from './pages/CouponList';
import ViewEnq from './pages/ViewEnq';
import ViewOrder from './pages/ViewOrder';
import { PublicRoutes } from './routing/PublicRoutes';
import { PrivateRoutes } from './routing/PrivateRoutes';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PublicRoutes><Login /></PublicRoutes>} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/admin' element={<PrivateRoutes><MainLayout /></PrivateRoutes>}>
          <Route index element={<DashBoard />} />
          <Route path='enquiries' element={<Enquiries />} />
          <Route path='enquiries/:id' element={<ViewEnq />} />
          <Route path='blogcategory-list' element={<BlogCatList />} />
          <Route path='blogcategory' element={<AddBlogCat />} />
          <Route path='blogcategory/:id' element={<AddBlogCat />} />
          <Route path='blog' element={<AddBlog />} />
          <Route path='blog/:id' element={<AddBlog />} />
          <Route path='blog-list' element={<BlogList />} />
          <Route path='coupon' element={<AddCoupon />} />
          <Route path='coupon/:id' element={<AddCoupon />} />
          <Route path='coupon-list' element={<CouponList />} />
          <Route path='color' element={<AddColor />} />
          <Route path='color/:id' element={<AddColor />} />
          <Route path='orders' element={<Orders />} />
          <Route path='orders/:id' element={<ViewOrder />} />
          <Route path='customers' element={<Customers />} />
          <Route path='list-color' element={<Colorlist />} />
          <Route path='list-category' element={<CategoryList />} />
          <Route path='category' element={<AddCat />} />
          <Route path='category/:id' element={<AddCat />} />
          <Route path='list-brand' element={<BrandList />} />
          <Route path='brand' element={<AddBrand />} />
          <Route path='brand/:id' element={<AddBrand />} />
          <Route path='list-product' element={<ProductList />} />
          <Route path='product' element={<AddProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

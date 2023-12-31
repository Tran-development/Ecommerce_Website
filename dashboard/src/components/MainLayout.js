import React, { useState } from 'react';
import {
  BiSolidDashboard,
  BiSolidCategoryAlt,
  BiSolidCoupon,
  BiLogOut
} from "react-icons/bi"
import { IoIosColorFilter } from 'react-icons/io'
import { PiNotebookBold } from 'react-icons/pi'
import { SiBrandfolder } from "react-icons/si"
import {
  FaBlogger,
  FaClipboardList,
  FaQuestionCircle,
  FaToggleOn,
  FaToggleOff
} from 'react-icons/fa'
import { AiFillGift } from 'react-icons/ai'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { MdNotificationsActive } from 'react-icons/md'
import { AiTwotoneFileAdd } from 'react-icons/ai'
import { BsFillPeopleFill, BsFillCartCheckFill, BsSearch } from 'react-icons/bs'
import { Layout, Menu, Button, theme } from 'antd';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'

const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleLogout = () => {
    localStorage.clear()
    window.location.reload()
  }

  const navigate = useNavigate()
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo d-flex gap-2">
          <img src={logo} className='img-fluid img-logo' />
          <h2 className='text-white fs-5 text-center py-3 mb-0'>
            <span className='name-logo'>Organic</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({ key }) => {
            if (key === "logout") {
              localStorage.clear()
              window.location.reload()
            } else {
              navigate(key)
            }
          }}
          items={[
            {
              key: '',
              icon: <BiSolidDashboard className='fs-5' />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <BsFillPeopleFill className='fs-5' />,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <BsFillCartCheckFill className='fs-5' />,
              label: 'Catalog',
              children: [
                {
                  key: 'product',
                  icon: <BsFillCartCheckFill className='fs-5' />,
                  label: 'Add Product',
                },
                {
                  key: 'list-product',
                  icon: <BsFillCartCheckFill className='fs-5' />,
                  label: 'Product List',
                },
                {
                  key: 'brand',
                  icon: <SiBrandfolder className='fs-5' />,
                  label: 'Brand',
                },
                {
                  key: 'list-brand',
                  icon: <SiBrandfolder className='fs-5' />,
                  label: 'Brand List',
                },
                {
                  key: 'category',
                  icon: <BiSolidCategoryAlt className='fs-5' />,
                  label: 'Category',
                },
                {
                  key: 'list-category',
                  icon: <BiSolidCategoryAlt className='fs-5' />,
                  label: 'Category List',
                },
                {
                  key: 'color',
                  icon: <IoIosColorFilter className='fs-5' />,
                  label: 'Color',
                },
                {
                  key: 'list-color',
                  icon: <IoIosColorFilter className='fs-5' />,
                  label: 'Color List',
                }
              ]
            },
            {
              key: 'orders',
              icon: <PiNotebookBold className='fs-5' />,
              label: 'Orders',
            },
            {
              key: 'blogs',
              icon: <FaBlogger className='fs-5' />,
              label: 'Blogs',
              children: [
                {
                  key: 'blog',
                  icon: <AiTwotoneFileAdd className='fs-5' />,
                  label: 'Add Blog',
                },
                {
                  key: 'blog-list',
                  icon: <FaClipboardList className='fs-5' />,
                  label: 'Blog List',
                },
                {
                  key: 'blogcategory',
                  icon: <BiSolidCategoryAlt className='fs-5' />,
                  label: 'Add Blog Category',
                },
                {
                  key: 'blogcategory-list',
                  icon: <BiSolidCategoryAlt className='fs-5' />,
                  label: 'Blog Category List',
                }
              ]
            },
            {
              key: 'coupons',
              icon: <AiFillGift className='fs-5' />,
              label: 'Coupons',
              children: [
                {
                  key: 'coupon',
                  icon: <BiSolidCoupon className='fs-5' />,
                  label: 'Add Coupon',
                },
                {
                  key: 'coupon-list',
                  icon: <FaClipboardList className='fs-5' />,
                  label: 'Coupon List',
                },                
              ]
            },
            {
              key: 'enquiries',
              icon: <FaQuestionCircle className='fs-5' />,
              label: 'Enquiries',
            },
            {
              key: 'logout',
              icon: <BiLogOut className='fs-5' />,
              label: 'Log Out',
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className='d-flex justify-content-between ps-3 pe-5'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div className='d-flex gap-20'>
            <Button
              type="text"
              icon={collapsed ? <FaToggleOff /> : <FaToggleOn />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <div className='search-box mt-2 mb-2'>
              <div className='d-flex align-items-center gap-4'>
                <input
                  type="text"
                  className="form-control"
                  id="search"
                  placeholder="Search"
                />
                <BsSearch className='fs-4 icon-search' />
              </div>
            </div>
          </div>

          <div className='d-flex gap-4 align-items-center'>
            <div className='position-relative'>
              <MdNotificationsActive className='fs-4 mt-2' />
              <span className='badge bg-warning rounded-circle p-1 position-absolute'>5</span>
            </div>
            <div className='d-flex gap-3 align-items-center dropdown'>
              <div className=''>
                <img
                  width={32}
                  height={32}
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHWbevVnhD_QGLdNmXmZj5yfKKxk432eLmA&usqp=CAU'
                  alt=''
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className='mb-0'>Admin</h5>
                <p className='mb-0'>admin@gmail.com</p>
              </div>
              <div className="dropdown-menu mt-2" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link className="dropdown-item py-1 mb-1" style={{ height: "auto", lineHeight: "20px" }} href="#">View Account</Link></li>
                <li>
                  <button onClick={handleLogout} className="dropdown-item py-1 mb-1" style={{ height: "auto", lineHeight: "20px" }} href="#">Logout</button></li>
              </div>
            </div>
          </div>

        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Layout>
    </Layout>
  );
};
export default MainLayout;
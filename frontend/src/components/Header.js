import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.scss'
import {
  BsSearchHeartFill,
  BsArrowsAngleContract,
  BsFillHeartFill,
  BsFillPersonFill,
  BsFillCartFill,
  BsList
} from "react-icons/bs"

const Header = () => {
  return (
    <>
      <header className='header-top py-2'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-6'>
              <p className='mb-0 text-hover'>Free Shipping for all Order of $99</p>
            </div>
            <div className='col-6'>
              <p className='text-end mb-0 text-hover'>
                Hotline: <a className='text-info' href='tel: +84 359683421'> +84 359683421</a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-2'>
              <h1>
                <Link to="/" className='logo-text'>Organic</Link>
              </h1>
            </div>
            <div className='col-5'>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="What do you need?"
                  aria-label="What do you need?" aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearchHeartFill className='fs-6' />
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link to='/compare-product' className='d-flex align-items-center d-flex gap-10 text-dark'>
                    <BsArrowsAngleContract className='fs-4' />
                    <p className='mb-0 text-hover'>Compare <br /> Products</p>
                  </Link>
                </div>
                <div>
                  <Link to='/wishlist' className='d-flex align-items-center d-flex gap-10 text-dark'>
                    <BsFillHeartFill className='fs-4' />
                    <p className='mb-0 text-hover'>Favourite <br /> wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link to='/login' className='d-flex align-items-center d-flex gap-10 text-dark'>
                    <BsFillPersonFill className='fs-4' />
                    <p className='mb-0 text-hover'>Log in <br /> My Account</p>
                  </Link>
                </div>
                <div>
                  <Link to='/cart' className='d-flex align-items-center d-flex gap-10 text-dark'>
                    <BsFillCartFill className='fs-4' />
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-dark text-white'>0</span>
                      <p className='mb-0 text-hover'>$0.00</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                  <div className="dropdown">
                    <button
                      className="drop-text btn btn-secondary dropdown-toggle bg-white border-0 d-flex align-items-center gap-10"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <BsList className='fs-4'/><span className='text-dark me-3 d-inline-block text-hover'>All Categories</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-hover" to="">Fresh Meat</Link></li>
                      <li><Link className="dropdown-item text-hover" to="">Vegetables</Link></li>
                      <li><Link className="dropdown-item text-hover" to="">Fruit & Nut Gifts</Link></li>
                      <li><Link className="dropdown-item text-hover" to="">Fresh Berries</Link></li>
                      <li><Link className="dropdown-item text-hover" to="">Ocean Foods</Link></li>
                      <li><Link className="dropdown-item text-hover" to="">Butter & Eggs</Link></li>
                      <li><Link className="dropdown-item text-hover" to="">Fresh Onion</Link></li>
                      <li><Link className="dropdown-item text-hover" to="">Papayaya & Crisps</Link></li>
                      <li><Link className="dropdown-item text-hover" to="">Oatmeal</Link></li>
                      <li><Link className="dropdown-item text-hover" to="">Fresh Bananas</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-30'>
                    <NavLink className="text-dark text-hover" to="/">Home</NavLink>
                    <NavLink className="text-dark text-hover" to="store">Our Store</NavLink>
                    <NavLink className="text-dark text-hover" to="/blogs">Blogs</NavLink>
                    <NavLink className="text-dark text-hover" to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
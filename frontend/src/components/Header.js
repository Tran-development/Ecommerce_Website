import React, { useEffect, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import './Header.scss'
import {
  BsSearchHeartFill,
  BsArrowsAngleContract,
  BsFillHeartFill,
  BsFillPersonFill,
  BsFillCartFill,
  BsList
} from "react-icons/bs"
import logoVN from '../images/logo_VN.png'
import logoUK from '../images/logo_UK.png'
import { useDispatch, useSelector } from 'react-redux'
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { getAProduct } from '../features/products/productSlice'
import { getUserCart } from '../features/user/userSlice'



const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cartState = useSelector((state) => state?.auth?.cartProducts)
  const authState = useSelector((state) => state?.auth)
  const productState = useSelector((state) => state?.product?.product)

  const [total, setTotal] = useState(0)
  console.log(total);
  const [paginate, setPaginate] = useState(true);
  const [productOpt, setProductOpt] = useState([])

  const handleLogout = () => {
    localStorage.clear()
    window.location.reload()
  }

   useEffect(() => {
        if (total === null || total === 0) {
          setTotal(0)
        } else {
          setTotal(total)
        }
    }, [total])

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + (Number(cartState[index]?.quantity) * Number(cartState[index]?.productId?.price))
      setTotal(sum)
    }
  }, [cartState])

  useEffect(() => {
    let data = []
    for (let index = 0; index < productState.length; index++) {
      const element = productState[index];
      data.push({ id: index, prod: element?._id, name: element?.title})
    }
    setProductOpt(data)
  }, [productState])

  return (
    <>
      <header className='header-top py-2'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-8'>
              <p className='mb-0 text-hover'>Free Shipping for all Order of $99</p>
            </div>
            <div className='col-2 d-flex gap-10 align-items-center'>
              <img className='img-fluid logo' src={logoVN} style={{ "display": "none" }} />
              <img className='img-fluid logo' src={logoUK} />
              <div className="dropdown">
                <select className="form-select">
                  <option selected>English</option>
                  <option value="1">VietNamese</option>
                  <option value="2">France</option>
                </select>
              </div>
            </div>
            <div className='col-2'>
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
                <Typeahead
                  id="pagination-example"
                  onPaginate={() => console.log('Results paginated')}
                  options={productOpt}
                  onChange={(selected) => {
                    navigate(`/product/${selected[0]?.prod}`)
                    dispatch(getAProduct(selected[0]?.prod))
                  }}
                  paginate={paginate}
                  labelKey={"name"}
                  minLength={1}
                  placeholder="Search for Products here..."
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearchHeartFill className='fs-6 search-icon' />
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
                  <Link to={authState?.user === null ? '/login' : "/my-profile"} className='d-flex align-items-center d-flex gap-10 text-dark'>
                    <BsFillPersonFill className='fs-4' />
                    {
                      authState?.user === null ?
                        <p className='mb-0 text-hover'>Log in <br /> My Account</p>
                        : <p className='mb-0 text-hover'>Welcome <br /> {authState?.user?.firstname} </p>
                    }
                  </Link>
                </div>
                <div>
                  <Link to='/cart' className='d-flex align-items-center d-flex gap-10 text-dark'>
                    <BsFillCartFill className='fs-4' />
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-dark text-white'>{cartState?.length ? cartState?.length : 0}</span>
                      <p className='mb-0 text-hover'>$ {total !== 0 ? total?.toFixed(2) : 0}</p>
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
                    >
                      <BsList className='fs-4' /><span className='text-dark me-3 d-inline-block text-hover all-categories'>All Categories</span>
                    </button>
                    
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-30'>
                    <NavLink className="text-dark text-hover" to="/">Home</NavLink>
                    <NavLink className="text-dark text-hover" to="/product">Our Store</NavLink>
                    <NavLink className="text-dark text-hover" to="/my-orders">My Orders</NavLink>
                    <NavLink className="text-dark text-hover" to="/blogs">Blogs</NavLink>
                    <NavLink className="text-dark text-hover" to="/contact">Contact</NavLink>
                    <button
                      onClick={handleLogout}
                      className='border border-0 bg-transparent text-dark text-uppercase'
                    >Logout</button>
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
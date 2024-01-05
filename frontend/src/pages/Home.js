import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Marquee from 'react-fast-marquee'
import './Home.scss'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import Container from '../components/Container'
import services from "../utils/Data"
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from '../features/blogs/blogSlice'
import moment from 'moment'
import ReactStars from "react-rating-stars-component"
import { addToWishList, getProducts } from '../features/products/productSlice'

export const Home = () => {

  const blogState = useSelector((state) => state?.blog?.blog)
  const productState = useSelector((state) => state?.product?.product)
  console.log(productState);
  const distpatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    getAllBlogs()
    getAllProduct()
  }, [])

  const getAllBlogs = () => {
    distpatch(getBlogs())
  }

  const getAllProduct = () => {
    distpatch(getProducts())
  }

  const handleAddToWishList = (id) => {
    console.log(id);
    distpatch(addToWishList(id))
  }
  return (
    <>

      <Container class1="home-wrapper-1 banner-main py-5">
        <div className='row'>
          <div className='col-2 position-relative'>
            <ul className="dropdown-menu list-item position-absolute" style={{ display: "block" }}>
              <li><Link className="dropdown-item text-hover" to="">Organic Produce</Link></li>
              <li><Link className="dropdown-item text-hover" to="">Agricultural Products</Link></li>
              <li><Link className="dropdown-item text-hover" to="">Processed Foods</Link></li>
              <li><Link className="dropdown-item text-hover" to="">Dried Fruits</Link></li>
              <li><Link className="dropdown-item text-hover" to="">Dried Vegetables</Link></li>
              <li><Link className="dropdown-item text-hover" to="">Butter & Eggs</Link></li>
              <li><Link className="dropdown-item text-hover" to="">Fresh Fruits</Link></li>
              <li><Link className="dropdown-item text-hover" to="">Papayaya & Crisps</Link></li>
              <li><Link className="dropdown-item text-hover" to="">Organic Rice</Link></li>
              <li><Link className="dropdown-item text-hover" to="">Fresh Bananas</Link></li>
            </ul>
          </div>
          <div className='col-10 banner-wrapper'>
            <div className='main-banner position-relative'>
              <img className='' src='images/main-banner.jpg' alt='main banner' />
              <div className='main-banner-content position-absolute'>
                <h6>EAT ORGANIC</h6>
                <h3>Vegetable <br />
                  100% Organic</h3>
                <p>Reach for healthier you with organic foods</p>
                <Link to='/product' className='button'>DISCOVER NOW</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-1 py-2">
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative'>
              <img className='img-fluid rounded-3' src='images/main-banner.jpg' alt='main banner' />
              <div className='main-banner-content position-absolute'>
                <h6>EAT ORGANIC</h6>
                <h3>Vegetable <br />
                  100% Organic</h3>
                <p>Reach for healthier you with organic foods</p>
                <Link to='/product' className='button'>DISCOVER NOW</Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
              <div className='small-banner position-relative'>
                <img className='img-fluid rounded-3' src='images/catbanner-01.jpg' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h6>EAT HEALTHY</h6>
                  <h3>Organic<br />
                    Cold Beverage</h3>
                  {/* <p>Fresh Vegetables Sale 30% Off</p> */}
                </div>
              </div>

              <div className='small-banner position-relative'>
                <img className='img-fluid rounded-3' src='images/catbanner-02.jpg' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h6>EAT HEALTHY</h6>
                  <h3>Organic Orange<br />
                    Juice 40% Flat</h3>
                  {/* <p>Free Pickup and Delivery Available</p> */}
                </div>
              </div>

              <div className='small-banner position-relative'>
                <img className='img-fluid rounded-3' src='images/catbanner-01.jpg' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h6>FRUIT FRESH</h6>
                  <h3>Vegetable <br />
                    100% Organic</h3>
                  {/* <p>Free Pickup and Delivery Available</p> */}
                </div>
              </div>

              <div className='small-banner position-relative'>
                <img className='img-fluid rounded-3' src='images/catbanner-02.jpg' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h6>EAT HEALTHY</h6>
                  <h3>100 % Pure<br />
                    Natural Vegetable</h3>
                  {/* <p>Free Pickup and Delivery Available</p> */}
                </div>
              </div>


            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>

              {services?.map((i, j) => {
                return (
                  <div className='d-flex align-items-center gap-10' key={j}>
                    <img src={i.image} alt='services' />
                    <div>
                      <h6>{i.title}</h6>
                      <p className='mb-0'>{i.tagline}</p>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5 shop-market-main">
        <div className='row'>
          <div className='col-12'>
            <h5 className='shop-title-market'>SHOP MARKETS</h5>
            <div className='categories d-flex justify-content-between align-items-center'>
              <div>
                <Link to="/product"><img className='item-maket' src='images/fruit.jpg' alt='fruit' /></Link>
                <div className='shop-maket'>
                  <h6 className='title'>Fresh Fruits</h6>
                  <p>10 Products</p>
                </div>
              </div>

              <div>
                <Link to="/product"><img className='item-maket' src='images/fresh-meat.jpg' alt='fresh-meat' /></Link>
                <div className='shop-maket'>
                  <h6 className='title'>Fresh Meat</h6>
                  <p>3 Products</p>
                </div>
              </div>

              <div>
                <Link to="/product"><img className='item-maket' src='images/vegetables.jpg' alt='vegetables' /></Link>
                <div className='shop-maket'>
                  <h6 className='title'>Vegetables</h6>
                  <p>4 Products</p>
                </div>
              </div>

              <div>
                <Link to="/product"><img className='item-maket' src='images/eggs.jpg' alt='eggs' /></Link>
                <div className='shop-maket'>
                  <h6 className='title'>Butter & Eggs</h6>
                  <p>2 Products</p>
                </div>
              </div>

              <div>
                <Link to="/product"><img className='item-maket' src='images/milk.jpg' alt='milk' /></Link>
                <div className='shop-maket'>
                  <h6 className='title'>Milk & Scream</h6>
                  <p>2 Products</p>
                </div>
              </div>

              <div>
                <Link to="/product"><img className='item-maket' src='images/juice.jpg' alt='juice' /></Link>
                <div className='shop-maket'>
                  <h6 className='title'>Fresh Juice</h6>
                  <p>8 Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="features-wrapper py-5 home-wrapper-2">
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>FEATURED PRODUCTS</h3>
          </div>
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "featured") {
                return (
                  <div key={index} className={"col-3 mb-4"}>
                    <div
                      className='product-card position-relative'
                    >
                      <div className='wishlist-icon position-absolute'>
                        <button className='border-0 bg-transparent'>
                          <img
                            className='btn-wishlist'
                            src='images/wish.svg'
                            alt='wishlist'
                            onClick={() => handleAddToWishList(item?._id)}
                          />
                        </button>
                      </div>
                      <div className='product-image'>
                        <img src={item?.images[0].url} className='img-fluid' alt='Organic Cabbage' />
                        <img src='images/oninon.jpg' className='img-fluid' alt='Onion' />
                      </div>
                      <div className='product-details'>
                        <h6 className='brand'>{item?.brand}</h6>
                        <h5 className='product-title'>{item?.title}</h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={item?.totalrating.toString()}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className={"d-none"}
                          dangerouslySetInnerHTML={{ __html: item?.description }}
                        >

                        </p>
                        <p className='price'>${item?.price}</p>
                      </div>

                      <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                          <button className='border-0 bg-transparent'>
                            <img className='btn-product' src='images/prodcompare.svg' alt='compare' />
                          </button>
                          <button className='border-0 bg-transparent'>
                            <img onClick={() => navigate('/product/' + item?._id)} className='btn-product' src='images/view.svg' alt='view' />
                          </button>
                          <button className='border-0 bg-transparent'>
                            <img className='btn-product' src='images/add-cart.svg' alt='addcart' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            })
          }
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-banner.png' className='img-fluid' alt='famous-banner' />
              <div className='famous-content-sale position-absolute'>
                <label className='item-title-label'>Special Offer</label>
              </div>
              <div className='famous-content position-absolute'>
                <h5>Summer Sale <br /> 50% off Fruits</h5>
                <p>From $50 to 200$</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-banner-2.png' className='img-fluid' alt='famous-banner' />
              <div className='famous-content-sale position-absolute'>
                <label className='item-title-label'>Special Offer</label>
              </div>
              <div className='famous-content position-absolute'>
                <h5>Summer Sale <br /> 50% off Fruits</h5>
                <p>From $50 to 200$</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-banner-3.png' className='img-fluid' alt='famous-banner' />
              <div className='famous-content-sale position-absolute'>
                <label className='item-title-label'>Black Friday</label>
              </div>
              <div className='famous-content position-absolute'>
                <h5>Summer Sale <br /> 50% off Fruits</h5>
                <p>From $50 to 200$</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-banner-2.png' className='img-fluid' alt='famous-banner' />
              <div className='famous-content-sale position-absolute'>
                <label className='item-title-label'>Special Offer</label>
              </div>
              <div className='famous-content position-absolute'>
                <h5>Summer Sale <br /> 50% off Fruits</h5>
                <p>From $50 to 200$</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1='special-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>DEAL OF THE DAY</h3>
          </div>
          <div className='row'>
            {productState &&
              productState?.map((item, index) => {
                if (item.tags === "special") {
                  return (
                    <SpecialProduct
                      key={index}
                      id={item?._id}
                      title={item?.title}
                      brand={item?.brand}
                      price={item?.price}
                      sold={item?.sold}
                      totalrating={item?.totalrating.toString()}
                      quantity={item?.quantity}
                    />
                  )
                }
              })
            }
          </div>
        </div>
      </Container>

      <Container class1='trending-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Trending Products</h3>
          </div>
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "popular") {
                return (
                  <div key={index} className={"col-3"}>
                    <div
                      className='product-card position-relative'
                    >
                      <div className='wishlist-icon position-absolute'>
                        <button className='border-0 bg-transparent'>
                          <img
                            className='btn-wishlist'
                            src='images/wish.svg'
                            alt='wishlist'
                            onClick={() => handleAddToWishList(item?._id)}
                          />
                        </button>
                      </div>
                      <div className='product-image'>
                        <img src={item?.images[0].url} className='img-fluid' alt='Organic Cabbage' />
                        <img src='images/oninon.jpg' className='img-fluid' alt='Onion' />
                      </div>
                      <div className='product-details'>
                        <h6 className='brand'>{item?.brand}</h6>
                        <h5 className='product-title'>{item?.title}</h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={item?.totalrating.toString()}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className={"d-none"}
                          dangerouslySetInnerHTML={{ __html: item?.description }}
                        >

                        </p>
                        <p className='price'>${item?.price}</p>
                      </div>

                      <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                          <button className='border-0 bg-transparent'>
                            <img className='btn-product' src='images/prodcompare.svg' alt='compare' />
                          </button>
                          <button className='border-0 bg-transparent'>
                            <img onClick={() => navigate('/product/' + item?._id)} className='btn-product' src='images/view.svg' alt='view' />
                          </button>
                          <button className='border-0 bg-transparent'>
                            <img className='btn-product' src='images/add-cart.svg' alt='addcart' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            })
          }
        </div>
      </Container>

      <Container class1="home warpper-2 py-5">
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src='images/brand-01.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-02.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-03.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-04.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-05.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-06.png' alt='brand' />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>



      <Container class1='blog-wrapper py-5 home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Latest Blogs</h3>
          </div>
        </div>
        <div className='row'>
          {blogState &&
            blogState?.map((item, index) => {
              return (
                <div className='col-3' key={index}>
                  <BlogCard
                    id={item?._id}
                    title={item?.title}
                    description={item?.description}
                    image={item?.images[0]?.url}
                    data={blogState ? blogState : []}
                    date={moment(item?.createdAt).format('MMMM Do YYYY, h:mm a')}
                  />
                </div>
              )
            })}
        </div>
      </Container>
    </>
  )
}

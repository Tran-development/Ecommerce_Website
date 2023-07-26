import React from 'react'
import { Link } from "react-router-dom"
import Marquee from 'react-fast-marquee'
import './Home.scss'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'

export const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative'>
                <img className='img-fluid rounded-3' src='images/main-banner.jpg' alt='main banner' />
                <div className='main-banner-content position-absolute'>
                  <h6>EAT ORGANIC</h6>
                  <h3>Vegetable <br />
                    100% Organic</h3>
                  <p>Reach for healthier you with organic foods</p>
                  <Link className='button'>DISCOVER NOW</Link>
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
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/service.png' alt='services' />
                  <div>
                    <h6>100% Natural</h6>
                    <p className='mb-0'>Eat local, consume local, closer to nature.</p>
                  </div>
                </div>

                <div className='d-flex align-items-center gap-10'>
                  <img src='images/service-02.png' alt='services' />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>Free shipping on orders over $59</p>
                  </div>
                </div>

                <div className='d-flex align-items-center gap-10'>
                  <img src='images/service-03.png' alt='services' />
                  <div>
                    <h6>Return Product</h6>
                    <p className='mb-0'>Retail, a Product Return Process</p>
                  </div>
                </div>

                <div className='d-flex align-items-center gap-10'>
                  <img src='images/service-04.png' alt='services' />
                  <div>
                    <h6>24/7 Support</h6>
                    <p className='mb-0'>Support Options Including 24/7</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h5 className='shop-title-market'>SHOP MARKETS</h5>
              <div className='categories d-flex justify-content-between align-items-center'>

                <div className=''>
                  <img src='images/fruit.jpg' alt='fruit' />
                  <div className='shop-maket'>
                    <h6>Fresh Fruits</h6>
                    <p>10 Products</p>
                  </div>
                </div>

                <div className=''>
                  <img src='images/fresh-meat.jpg' alt='fresh-meat' />
                  <div className='shop-maket'>
                    <h6>Fresh Meat</h6>
                    <p>3 Products</p>
                  </div>
                </div>

                <div className=''>
                  <img src='images/vegetables.jpg' alt='vegetables' />
                  <div className='shop-maket'>
                    <h6>Vegetables</h6>
                    <p>4 Products</p>
                  </div>
                </div>

                <div className=''>
                  <img src='images/eggs.jpg' alt='eggs' />
                  <div className='shop-maket'>
                    <h6>Butter & Eggs</h6>
                    <p>2 Products</p>
                  </div>
                </div>

                <div className=''>
                  <img src='images/milk.jpg' alt='milk' />
                  <div className='shop-maket'>
                    <h6>Milk & Scream</h6>
                    <p>2 Products</p>
                  </div>
                </div>

                <div className=''>
                  <img src='images/juice.jpg' alt='juice' />
                  <div className='shop-maket'>
                    <h6>Fresh Juice</h6>
                    <p>8 Products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='features-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>FEATURED PRODUCTS</h3>
            </div>
            <ProductCard />
          </div>
        </div>
      </section>

      <section className='famous-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
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
        </div>
      </section>

      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>DEAL OF THE DAY</h3>
            </div>
            <div className='row'>
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
        </div>
      </section>

      <section className='trending-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Trending Products</h3>
            </div>
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="home warpper-2 py-5">
        <div className='container-xxl'>
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
        </div>
      </section>



      <section className='blog-wrapper py-5 home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

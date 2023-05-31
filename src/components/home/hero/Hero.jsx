import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' />

          <form className='flex search-box'>
            <div className='box'>
              <span>governorate</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>City</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Property Type</span>
              <input type='text' placeholder='Property Type' />
            </div>
            <div className='box'>
              <span>Min-Price</span>
              <input type='text' placeholder='Min-Price' />
            </div>
            <div className='box'>
            <span>Max-Price</span>
              <input type='text' placeholder='Max-Price' />
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero

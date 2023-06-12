import React from 'react'
import './Add.css'
import Slider from '../slider/slider'
import Nav from '../nav/Nav'

const Add = () => {
  return (
    <div className='add'>
    <Slider />
      <Nav />
      <section className='contact mb'>
      <div className='container'>
          <form className='shadow'   >
            <h4>Fillup The Form</h4> <br />
            <div>
              <input className="form-control" type='text' placeholder='Titel' required />
            </div>
            <div >
            <input className="form-control"  type='text' placeholder='Type' required />
            </div>
            <div >
            <input className="form-control"  type='number' placeholder='price' required  />
            </div>
            <div >
            <input className="form-control"  type='number' placeholder='The number of rooms' required  />
            </div>
            <div >
            <input className="form-control"  type='text' placeholder='location' required />
            </div>
            <div >
            <input className="form-control"  type='text' placeholder='Description'required  />
            </div>
            <div >
            <input className="form-control"  type='file' required  />
            </div>
  
            <button type="submit"  >Submit Request</button>
          </form>
          
        </div>
        </section>
      
    </div>
  )
}

export default Add

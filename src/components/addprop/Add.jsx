import React, { useState } from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./Add.css"
import LoadingSpinner from "../Loding/Loding"

const Add = () => {
  const [Loding,setLoding]=useState(false)
  const [mes,setmes]=useState(false)

  
  const handelsumpit=(e)=>{
    e.preventDefault()
    setmes(!mes)
  }
  return (
    <>
      <section className='contact mb'>
        <Back name='Add your own ad' title=' Hello, we wish you a happy service' cover={img} />
        <div className='container'>
          {mes ? <div className="mes-reqest"><p>Thank you for your trust <span>Investify </span> in your request under review, please wait</p></div>  :
          <form className='shadow'  onSubmit={handelsumpit} >
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
          }
        </div>
      </section>
    </>
  )
}

export default Add

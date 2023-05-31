import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './bage.css'
import data from '../../recent/Data.json'
import { useDispatch } from 'react-redux'
import { AddProdectInItemPage } from '../../../../redux/counterSlice'


const Fillter = () => {
    const dispatch=useDispatch()
    const unit=(item)=>{
      dispatch(AddProdectInItemPage(item))
    }
  return (
    <div className='House'>
<div className="container">
    <div className="row">

        <div className="col-12 hed">
            <Link to="/">Home</Link>/
            <span>House</span>
        </div>

        {
            data.map((item)=>{
                return(
                    <div className="col-12 card-filter" key={item.id}>
                        <div className="row">
                        <Link to="/Item" onClick={()=>{unit(item)}} className="img col-lg-4 col-sm-12" >
                            <img src={item.cover} alt="" />
                        </Link>
                        <div className="det col-lg-7 col-sm-12">
                        <div className='category flex'>
                  <span style={{ background: item.category === "For Sale" ? "#25b5791a" : "#ff98001a", color: item.category === "For Sale" ? "#25b579" : "#ff9800" }}>{item.category}</span>
                  <span ><i className='fa fa-heart' ></i> <span>{}</span></span>
                </div>
                            <div className="titel"><h3>{item.name}</h3></div>
                            <div className="simpledetails">
                <div className="Property-type">
                  Property type: <span>{item.type}</span>
                </div>
                <div className="Bedrooms">
                  Bedrooms: <span>{item.Bedrooms}</span>
                </div>
                <div className="Property-size">
                  Property size: <span>{item.PropertySize}m</span>
                </div>
                <div className="Bathrooms">
                  Bathrooms: <span> {item.Bathrooms}</span>
                </div>
              </div>

                        </div>
                        </div>

                    </div>
                )
            })
        }
        
    </div>
</div>

    </div>
  )
}

export default Fillter

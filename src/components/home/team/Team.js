import React from "react"
import Heading from "../../common/Heading"
import team from "./data.json"
import "./team.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { useDispatch } from "react-redux"
import { AddProdectInItemPage } from "../../../redux/counterSlice"

const Team = () => {
  const dispatch=useDispatch()
  const agent=(item)=>{
    dispatch(AddProdectInItemPage(item))
  }

  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Our Featured Agents'  />

          <div className='content mtop grid3'>
            {team.map((item) => (
              <Link to="/AgentProfile" onClick={()=>{agent(item)}} className='box'  key={item.id}>
                <button className='btn3'>{item.list} Listings</button>
                <div className='details'>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                    <i className='fa-solid fa-circle-check'></i>
                  </div>
                  <i className='fa fa-location-dot'></i>
                  <label>{item.address}</label>
                  <h4>{item.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team

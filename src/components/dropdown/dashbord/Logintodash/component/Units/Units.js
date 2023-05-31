import React from 'react'
import Slider from '../slider/slider'
import './units.css'
import Nav from '../nav/Nav'
import item from "../BODY/data.json";
const Units = () => {
  return (
<div className="Units">
      <Slider />
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <div className="explane col-12">
            <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Unit Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Date </th>
                  <th scope="col">Approval </th>
                </tr>
              </thead>
              <tbody>
                {item.map((item,index)=>{
                  return(
                    <tr key={index}>
                    <th scope="row">
                      <input type={"checkbox"} />
                      <span>{index}</span>
                    </th>
                    <td>{item.username}</td>
                    <td>{item.unitname}</td>
                    <td>{item.price}</td>
                    <td>{item.Date}</td>
                    <td>
                      <button className="btn btn-danger">Delet</button>
                    </td>
                  </tr>
                  )
                })
}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Units

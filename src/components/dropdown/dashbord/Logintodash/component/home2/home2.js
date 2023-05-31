import React from "react";
import data from "../../josn/custemer.json";
import "./home2.css";

const Home2 = () => {
  return (
    <div className="home2">
      <div className="container-fluid">
        <div className="row scroll">
          <table className="table table-hover table-dark " >
            <thead>
            <tr>
                  <th scope="col">ID</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Date </th>
                  <th scope="col">Approval </th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=>{
                  return(
                    <tr key={index}>
                    <th scope="row">
                      <input type={"checkbox"} />
                      <span>{index}</span>
                    </th>
                    <td>{item.username}</td>
                    <td>${item.Email}</td>
                    <td>{item.phone}</td>
                    <td>{item.Date}</td>
                    <td>
                      <button className="btn btn-danger"> Delet </button>
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
  );
};

export default Home2;

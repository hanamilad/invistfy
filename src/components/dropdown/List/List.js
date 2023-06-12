import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddProdectInItemPage, DeletItemFromList, ListItem } from '../../../redux/counterSlice';
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const List = () => {
    const data=useSelector(ListItem)
    const dispatch = useDispatch();
    const unit = (item) => {
        dispatch(AddProdectInItemPage(item));
      };
      let wishList = (item) => {
dispatch(DeletItemFromList(item))

      };
  return (
    <div className="recent">
        <div className="container">
            <div className="row">
    <div className='List grid3 mtop'>
            {data.map((item) => {
          return (
            <div className="box shadow" key={item.id}>
              <Link
                to="/Item"
                onClick={() => {
                  unit(item);
                }}
              >
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>
              </Link>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        item.category === "For Sale"
                          ? "#25b5791a"
                          : "#ff98001a",
                      color:
                        item.category === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {item.category}
                  </span>
                  <span onClick={() => wishList(item)}>
                    <i
                      className="fa fa-heart"
                      style={{ color:"red"}}
                    ></i>{" "}
                    <span>{item.likes}</span>
                  </span>
                </div>
                <h4>{item.name}</h4>
                <p>
                  <i className="fa fa-location-dot"></i> {item.location}
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">{item.price}</button>
                </div>
                <span>{item.type}</span>
              </div>
            </div>
          );
        })}
        </div>
        </div>
        </div>
    </div>
  )
}

export default List

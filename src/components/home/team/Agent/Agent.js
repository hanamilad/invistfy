import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { AddProdectInItemPage, selectoritem } from "../../../../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import './agent.css'
import list from "../../../home/recent/Data.json";

export default function AgentProfile() {
  const item = useSelector(selectoritem);
  const dispatch = useDispatch();
  const unitpage = (unit) => {
    dispatch(AddProdectInItemPage(unit));
  };

  return (
    <section style={{ backgroundColor: "#eee" }}>
      {item.map((item) => {
        return (
          <MDBContainer className="py-5" key={item.id}>
            <MDBRow>
              <MDBCol>
                <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                  <MDBBreadcrumbItem>
                    <Link to="/">Home</Link>
                  </MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active>Agent Profile</MDBBreadcrumbItem>
                </MDBBreadcrumb>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol lg="4">
                <MDBCard className="mb-4">
                  <MDBCardBody className="text-center">
                    <MDBCardImage
                      src={item.cover}
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: "150px" }}
                      fluid
                    />
                    <p className="text-muted mb-1">Full Stack Developer</p>
                    <p className="text-muted mb-4">
                      Bay Area, San Francisco, CA
                    </p>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-4 mb-lg-0">
                  <MDBCardBody className="p-0">
                    <MDBListGroup flush="true" className="rounded-3">
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon
                          fab
                          icon="github fa-lg"
                          style={{ color: "#333333" }}
                        />
                        <MDBCardText>GitHub</MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon
                          fab
                          icon="twitter fa-lg"
                          style={{ color: "#55acee" }}
                        />
                        <MDBCardText>Twwiter</MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon
                          fab
                          icon="instagram fa-lg"
                          style={{ color: "#ac2bac" }}
                        />
                        <MDBCardText>Instagram</MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon
                          fab
                          icon="facebook fa-lg"
                          style={{ color: "#3b5998" }}
                        />
                        <MDBCardText>Facebook</MDBCardText>
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="8">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Full Name</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {item.name}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {item.name}@example.com
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Phone</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          (097) 234-5678
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Mobile</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          (098) 765-4321
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Address</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {item.address}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>

                <MDBRow>
                  <MDBCol md="12">
                    <MDBCard className="mb-4 mb-md-0">
                      <MDBCardBody>
                        <MDBCardText className="mb-4">
                          <span className="text-primary font-italic me-1">
                          Project
                          </span>
                        </MDBCardText>
                        {list.map((unit) => {
                          return (
                            <Link to="/Item" onClick={()=>{unitpage(unit)}} className="card-flex small" key={unit.id}>
                              <div className="img">
                                <img src={unit.cover} alt="" />
                              </div>
                              <div className="det"><b>{unit.name}</b></div>
                              <div className="det">{unit.type}</div>
                              <div
                                className="det"
                                style={{
                                  background:
                                    item.category === "For Sale"
                                      ? "#25b5791a"
                                      : "#ff98001a",
                                  color:
                                    item.category === "For Sale"
                                      ? "#25b579"
                                      : "#ff9800",
                                }}
                              >
                                {item.category}
                              </div>
                            </Link>
                          );
                        })}
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        );
      })}
    </section>
  );
}

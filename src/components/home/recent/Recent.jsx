import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <div className="row">
          <Heading title='Recent Property Listed'  />
          <RecentCard />
        </div>
        </div>
      </section>
    </>
  )
}

export default Recent

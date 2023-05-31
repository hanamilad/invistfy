import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='The site was created by students of New Cairo University' />

            <p>Our mission: To motivate and inspire people to get living the life they deserve.
When you look for a property, it’s not just a better home you seek, it’s a better future.
Unlock Your Potential.</p>
            <p>Investify website has been created In the year 2023 to facilitate the process of buying and renting on the Internet quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About

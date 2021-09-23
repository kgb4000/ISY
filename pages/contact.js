import styled  from 'styled-components'
import HeroSection from '../components/Hero'

const Contact = () => {
  return (
    <>
      <HeroSection 
          heroText="Contact us"
          backgroundImage="/dudes-on-bikes.jpeg"
          subText="We Want To Hear From You"
          backgroundHeight="60vh"
        />
        <div className="container">
          <h2>Contact</h2>
        </div>
      
    </>
  )
}

export default Contact
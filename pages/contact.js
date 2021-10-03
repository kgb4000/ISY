import HeroSection from '../components/Hero'

// const Contact = () => {
//   return (
//     <>
//       <HeroSection 
//           heroText="Contact us"
//           backgroundImage="/dudes-on-bikes.jpeg"
//           subText="We Want To Hear From You"
//           backgroundHeight="60vh"
//         />
//         <div className="container">
//           <h2>Contact</h2>
//         </div>
      
//     </>
//   )
// }

import { useState } from 'react'
import styled from 'styled-components'
// import Button from '../components/Button'
import { NextSeo } from 'next-seo'

const Contact = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null,
    },
  })

  const [inputs, setInputs] = useState({
    firstName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    budget: '',
    message: '',
  })

  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }

  const isEnabled = inputs.email.length && inputs.firstName > 0

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg: msg,
        },
      })
      setInputs({
        firstName: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        budget: '',
        message: '',
      })
    } else {
      setStatus({
        info: {
          error: true,
          msg: msg,
        },
      })
    }
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    setStatus((prevStatus) => ({
      ...prevStatus,
      submitting: true,
    }))

    const endpoint =
      // 'https://eekybmqof6.execute-api.us-east-1.amazonaws.com/prod/weddings-contact-form'
      "you"

    const body = JSON.stringify({
      senderName: inputs.name,
      senderEmail: inputs.email,
      senderPhone: inputs.phone,
      senderService: inputs.service,
      senderDate: inputs.date,
      senderBudget: inputs.budget,
      message: inputs.message,
    })

    console.log(body)

    const res = await fetch(endpoint, {
      method: 'POST',
      body,
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  const SEO = {
    // title: 'Contact | I See You Network',
    // description:
    //   "If you're a busy couple planning your wedding and you think you may need help, please contact us.",
    // canonical: 'https://monicabrowneweddings.com/contact',
    // openGraph: {
    //   type: 'website',
    //   locale: 'en_US',
    //   url: 'https://monicabrowneweddings.com/contact',
    //   site_name: 'Monica Browne Weddings',
    //   images: [
    //     {
    //       url: 'https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495887/walking-down-aisle_o4wklu.webp',
    //       width: 3961,
    //       height: 2641,
    //       alt: 'Couple just married, walking down the aisle.',
    //     },
    //   ],
    // },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <Main className="container">
        <div className="content">
          <h1 className="title">Contact us</h1>
          <ContactForm>
            <Form onSubmit={handleOnSubmit}>
              <label htmlFor="firstName">Name *</label>
              <input
                id="firstName"
                type="firstName"
                onChange={handleOnChange}
                required
                value={inputs.firstName}
              />
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                type="email"
                onChange={handleOnChange}
                required
                value={inputs.email}
              />
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                onChange={handleOnChange}
                required
                value={inputs.message}
              />
              <button
                type="submit"
                disabled={status.submitting || isEnabled}
              >
                {!status.submitting
                  ? !status.submitted
                    ? 'Send to ISY'
                    : 'Submitted'
                  : 'Submitting...'}
              </button>
            </Form>
            {status.info.error && (
              <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
              <div className="success">
                Your message has been sent to Monica
              </div>
            )}
          </ContactForm>
        </div>
      </Main>
    </>
  )
}

const Main = styled('div')`
  .content {
    text-align: left;
  }

  p {
    margin-bottom: 0.5em;
  }
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`

const ContactForm = styled('div')`
  max-width: 100%;

  img {
    display: none;
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1140px) {
    img {
      display: block;
    }

    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    grid-gap: 30px;
  }

  margin-bottom: 2em;
`

const Form = styled('form')`
  margin: 0;
  padding: 0;
  with: 100%;

  label {
    font-size: 1rem;
    font-weight: 200;
    padding-left: 1rem;
    margin-bottom: 0.5em;
  }
  input,
  textarea {
    width: 100%;
    padding: 1rem;
    margin: 1rem 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 200;
    font-family: inherit;
    box-sizing: border-box;
  }

  input[type='text'],
  input[type='date'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
  }

  .budget {
    margin: 1rem 0;
  }

  input[type='radio'] {
    width: 1rem;
    margin-right: 1rem;
    justify-content: center;
  }

  textarea {
    height: 200px;
  }

  p {
    margin-bottom: 0.5rem;
  }
`
// const SendButton = styled(Button)`
//   margin-top: 0.5rem;
//   color: #fff;
// `

export default Contact

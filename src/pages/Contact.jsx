import React from 'react'
import ContactDetails from '../components/contact/ContactDetails'
import QueryForm from '../components/contact/QueryForm'
import CompanyLocationMap from '../components/contact/CompanyLocationMap'

const Contact = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <ContactDetails />
        <QueryForm />
      </div>
      {/* <CompanyLocationMap /> */}
    </>
  )
}

export default Contact
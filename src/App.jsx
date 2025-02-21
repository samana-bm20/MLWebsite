import React from 'react'
import Routes from './router/Routes'
import ContactWidget from './components/ContactWidget'
import FixedContact from './pages/basic/FixedContact';

const App = () => {
  return (
    <>
      <Routes />
      <FixedContact />
      {/* <ContactWidget /> */}
    </>
  )
}

export default App
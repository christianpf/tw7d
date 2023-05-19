import React from 'react'

const ContactButton = ({children}) => {
  return (
    <a href="#contacto" className='block text-center bg-accent text-bg-secondary font-medium rounded-lg p-4 transition-all hover:brightness-105 hover:scale-105'>{children}</a>
  )
}

export default ContactButton
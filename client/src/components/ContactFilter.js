import React, {useContext} from 'react'
import ContactContext from '../context/contact/contactContext';

export const ContactFilter = () => {
    const contactContext = useContext(ContactContext);
    
  return (
    <div>ContactFilter</div>
  )
}

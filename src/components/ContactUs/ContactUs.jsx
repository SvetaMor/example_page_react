import React from 'react';
import ContactUsForm from './ContactUsForm';
import { ContactFormStyled } from '../../css/styled';

const ContactUs = ({data}) => {
   const handleSubmit = (values) => {
      alert("заявка оправлена");
   }
   debugger
   return (
      <ContactFormStyled>
      <div>
         <h2 className="contactTitle">{data.title}</h2>
         <ContactUsForm handleSubmit={handleSubmit} formData={data}/>
      </div>
      </ContactFormStyled>
   )
}

export default ContactUs;

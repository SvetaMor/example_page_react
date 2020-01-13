import React from 'react';
import {reduxForm} from 'redux-form';
import { Form, Row } from 'react-bootstrap';

const FormGroup = (props) => {
   return (
      props.fields.map(field => {
         debugger
         if (field.group === props.group) {
            return (
               <Form.Group key={field.name} placeholder={field.name}
               className={props.classCol}>
                  <Form.Label>{field.label}</Form.Label>
                  {
                     (field.type==="textarea")
                     ?(
                        <Form.Control as="textarea" className={field.type+'Item'} required={field.required}/>
                     )
                     :(
                        <Form.Control type={field.type} className={field.type+'Item'} required={field.required}/>
                     )
                  }

               </Form.Group>
            )
         }
      })
   )
}

export default reduxForm({form: 'contactUs'})(FormGroup) ;
//as="textarea" rows="3"

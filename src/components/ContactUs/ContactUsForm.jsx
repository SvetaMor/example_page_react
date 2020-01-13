import React from 'react';
import FormGroup from './FormGroup';
import { Form, Row } from 'react-bootstrap';

const ContactUsForm = (props) => {
   let classRow = "";
   let classCol = "";
   const checkboxField = props.formData.fields.filter(field => field.type === "checkbox")[0];
   return (
      <Form onSubmit={props.handleSubmit}>
         <Row>
            {
               Object.keys(props.formData.field_groups).map(group => {
                  const countFields = props.formData.fields.filter(field=> field.group===group).length;
                  classCol=(countFields>1)?(classCol="col-md-6"):(classCol="notCol");
                  debugger
                  return (
                     <div className={props.formData.field_groups[group]} key={group} >
                        {
                           (countFields>1)
                           ?(
                              <Row>
                                 <FormGroup fields={props.formData.fields} group={group} classCol={classCol}/>
                              </Row>
                           )
                           :(<FormGroup fields={props.formData.fields} group={group} classCol={classCol}/>)
                        }
                     </div>
                  )
               })
            }
         </Row>
         {
            <Form.Group className="checkboxFormGroup">
               <Form.Check type="checkbox" className="checkbox" />
               <div className="checkbox" dangerouslySetInnerHTML={{__html: checkboxField.label}}/>
            </Form.Group>
         }
         <button type="submit" class="buttonSubmit">
           {props.formData.submit_button.text}
         </button>

      </Form>
   )
}

export default ContactUsForm;

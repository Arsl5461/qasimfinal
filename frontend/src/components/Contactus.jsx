import React, { useState } from 'react';
import NavbarP from './NavbarP';
import Footer from './Footer';

import {
    MDBValidation,
    MDBValidationItem,
    MDBInput,
    MDBBtn,
    MDBCheckbox,
    MDBInputGroup,
    MDBTextArea,
    MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  } from 'mdb-react-ui-kit';


const ContactUs = () => {
  const myFunction = () => {
    alert("Thanks for contact us. we will get back soon through your given email adress");
  };

    const [formValue, setFormValue] = useState({
        fname: '',
        email: '',
      });
    
      const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
      };

      const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);

  return (
    <>
  
    <h1 className='about_heading'>Contact Us</h1>
    <div className='contactus'>


    <MDBValidation className='row g-3 col-12 '>

      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={formValue.fname}
          name='fname'
          onChange={onChange}
          id='validationCustom01'
          placeholder='Name'
          required
          // label='Name'
          />
      </MDBValidationItem>
      
      <MDBValidationItem feedback='Please choose a valid email address.' invalid className='col-md-4'>
        <MDBInputGroup textAfter='.com'>
          <input
            type='email'
            className='form-control'
            id='validationCustomUsername'
            placeholder='Email'
            required
            />
        </MDBInputGroup>
      </MDBValidationItem>

      <MDBValidationItem>
      <MDBInput  id='typePhone' type='tel' placeholder='Phone Number' required/>
      </MDBValidationItem>
      <MDBValidationItem>
      <MDBTextArea id='textAreaExample' placeholder='Enter Your Message' required  rows={4} />
      </MDBValidationItem>

      <MDBValidationItem className='col-12' feedback='You must agree before submitting.' invalid>
        <h5>We will contact with you shortly</h5>
        <MDBCheckbox label='Agree to terms and conditions' id='invalidCheck' required />
      </MDBValidationItem>
      <div className='col-12'>
        <MDBBtn color='success' onClick={toggleShow} type='submit'>Send</MDBBtn>
        {/* <MDBBtn type='reset'>Reset form</MDBBtn> */}
      </div>
    </MDBValidation>
            </div>



            <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>
                Thanks for contact with us you can also call at 0320 1234567 if you have urgent query.
              </p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    
            </>
  )
}

export default ContactUs
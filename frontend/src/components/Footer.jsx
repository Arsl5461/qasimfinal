import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <MDBFooter className='text-center' color='white' bgColor='success'>
      <MDBContainer className='p-4'>
        {/* <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section> */}

        {/* <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start='12'>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section> */}

        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Steel Buildings</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a className='text-white footer_link'>
                  <NavLink exact to="/services" className="nav_link_items ">Design</NavLink>
                  </a>
                </li>
                <li>
                  <a className='text-white footer_link'>
                    <NavLink exact to="/services" className="nav_link_items ">
                      Fabrication
                      </NavLink>
                  </a>
                </li>
                <li>
                  <a className='text-white footer_link'>
                    <NavLink exact to="/services" className="nav_link_items ">
                      Eraction
                      </NavLink>
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Land Scape</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a className='text-white footer_link'>
                    <NavLink exact to="/services" className="nav_link_items ">
                      Soft Land Scape
                      </NavLink>
                  </a>
                </li>
                <li>
                  <a className='text-white footer_link'>
                 <NavLink exact to="/services" className="nav_link_items ">
                  Hard Land Scape
                  </NavLink> 
                  </a>
                </li>
                <li>
                  <a className='text-white footer_link'>
                  <NavLink exact to="/services" className="nav_link_items ">
                    AGRICULTURAL PRODUCTS
                    </NavLink>
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright<span>: </span>
        <a className='text-white footer_link' href='http://gecq8.com/'>
        Green Enviroment Co.
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer
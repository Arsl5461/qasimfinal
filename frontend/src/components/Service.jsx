import React, { useState } from 'react'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardGroup,
    Button,
    Row,
    Col,
  } from "reactstrap";
  import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
// import Blog from "../../components/dashboard/Blog";
  import bg1 from "../assets/images/bg/bg1.jpg";
  import bg2 from "../assets/images/bg/bg2.jpg";
  import bg3 from "../assets/images/bg/bg3.jpg";
  import bg4 from "../assets/images/bg/bg4.jpg";

  const BlogData = [
    {
      image: bg1,
      title: "Steel Buildings",
      subtitle: "Design, Fabrication & Eraction",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat voluptatibus placeat nam,",
      btnbg: "success",
    },
    {
      image: bg2,
      title: "Land Scapes",
      subtitle: "Soft & Hard Land Scapes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat voluptatibus placeat nam,",
      btnbg: "success",
    },
    {
      image: bg3,
      title: "Agricultural Products",
      subtitle: "All good products",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat voluptatibus placeat nam",
      btnbg: "success",
    },
  ];
const Service = () => {
  const [scrollableModal, setScrollableModal] = useState(false);
  return (
    <>
    <h1 className='about_heading'>Services</h1>
    <div className='contactus'>


    <Row>
        <Col>
          <CardGroup>
            <Card>
              <CardImg alt="Card image cap" src={bg1} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">Steel Buildings</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                Design, Fabrication and Eraction
                </CardSubtitle>
                <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat voluptatibus placeat nam.
                </CardText>
                <MDBBtn color='success' onClick={() => setScrollableModal(!scrollableModal)}>Learn More</MDBBtn>
              </CardBody>
            </Card>
            <Card>
              <CardImg alt="Card image cap" src={bg2} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">Land Scraping</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                Soft and Hard Land Scapes
                </CardSubtitle>
                <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat voluptatibus placeat nam.
                </CardText>
                <MDBBtn color='success' onClick={() => setScrollableModal(!scrollableModal)}>Learn More</MDBBtn>
              </CardBody>
            </Card>
            <Card>
              <CardImg alt="Card image cap" src={bg3} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">Agricultural Products</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                All good products
                </CardSubtitle>
                <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat voluptatibus placeat nam.
                </CardText>
                <MDBBtn color='success' onClick={() => setScrollableModal(!scrollableModal)}>Learn More</MDBBtn>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>
      </Row>
      <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
        <MDBModalDialog scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Land Scraping and civil work service</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setScrollableModal(!scrollableModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                augue laoreet rutrum faucibus dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                augue laoreet rutrum faucibus dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                augue laoreet rutrum faucibus dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                augue laoreet rutrum faucibus dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                augue laoreet rutrum faucibus dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                augue laoreet rutrum faucibus dolor auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='success' onClick={() => setScrollableModal(!setScrollableModal)}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      </div>
    
    </>
  )
}

export default Service
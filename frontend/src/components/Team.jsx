import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import teamImg from "../images/team1.jpg"

const Team = () => {
  return (
    <>
    <h1 className='about_heading'>Our Team</h1>
    <div className='team contactus'>
        
        
        <div className='team_card'>
            
        
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={teamImg} />
      <Card.Body>
        <Card.Title>Mr Umair</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><span style={{color: "red" ,fontWeight: 'bold'}}>Post:</span> Chair Man</ListGroup.Item>
        <ListGroup.Item><span style={{color: "red" ,fontWeight: 'bold'}}>Education: </span>MBA</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
        <div className='team_card'>
            
        
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={teamImg} />
      <Card.Body>
        <Card.Title>Mr Sohail</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><span style={{color: "red" ,fontWeight: 'bold'}}>Post:</span> CEO</ListGroup.Item>
        <ListGroup.Item><span style={{color: "red" ,fontWeight: 'bold'}}>Education: </span>BBA</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
        <div className='team_card'>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={teamImg} />
      <Card.Body>
        <Card.Title>Mr Shariq</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><span style={{color: "red" ,fontWeight: 'bold'}}>Post:</span> Solution Architect</ListGroup.Item>
        <ListGroup.Item><span style={{color: "red" ,fontWeight: 'bold'}}>Education: </span>BSSE</ListGroup.Item>
      </ListGroup>
    </Card>
</div>
    
    </div>
    </>
  )
}

export default Team
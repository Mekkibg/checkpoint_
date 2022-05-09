import React from 'react'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = ({user}) => {
    console.log('user',user)
  return (
    <div  style={{marginTop:'5%'}}>
      <Card style={{ width: '18rem', border:'solid'}}>
  <Card.Body>
    <Card.Title style={{color:'#8d1dcd'}}>Name: {user.name}</Card.Title>
    <Card.Text>
    Email: {user.email}
    </Card.Text>
    <Card.Text>
    Phone: {user.phone}
    </Card.Text>
    <Card.Text>
    Company N: {user.company.name}
    </Card.Text>
    <Card.Text>
    Company BS: {user.company.bs}
    </Card.Text>
   
  </Card.Body>
</Card>
    </div>
  )
}

export default UserList

import React, { useEffect, useState } from 'react'
import instance from './axios'
import Table from 'react-bootstrap/Table';


function Home() {

    const [users,setUsers] = useState([]);
    useEffect(()=>{
        instance.get('/users')
        .then((res)=>setUsers(res.data));
    },[users]);

    console.log(users);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((data)=>{
            return(
              <tr>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.username}</td>
          <td>{data.email}</td>
          <td>{data.address.city}</td>
          <td>{data.phone}</td>
          <td>{data.website}</td>
          <td>{data.company.name}</td>
        </tr>
            )
          }
          )
        }
        
      </tbody>
    </Table>
  )
}

export default Home
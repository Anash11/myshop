import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import "./Role.css"
import Button from 'react-bootstrap/Button';
import {Col,Form} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import UpdateRole from './UpdateRole';
const Role=()=>
{
const[empData, setEmpData] =useState([])
  async function getData()
 {
    let response = await axios.get('http://localhost:5000/show')
    console.log(response.data)
    setEmpData(response.data)
 }
 
 //for update role
 const [updateUser, setUpdateUser] = useState(false);
 const Update = () =>{
  return(
    <>
    <div className='updateWrapper'></div>
    <div className='updateBox' style={{marginLeft:'-500px'}}>
      <h2 style={{textAlign:'center',marginTop:'10px'}}>Update Role</h2>
      <form>
          <label>Role Id</label>
          <br/>         
          <input/>
          <br/>
          <label>Role Name</label>
          <br/>
          <input/>
          <br/>
          <button className='modalButton' style={{background:'green'}} onClick={()=>setUpdateUser(false)}>Update</button>
        <button className='modalButton' style={{background:'red'}} onClick={()=>setUpdateUser(false)}>Cancel</button>
        </form>
      
    </div>
    </>
  )
}

 useEffect(()=>{
   getData()
 },[])
 
  return (
    <>
    <div className='RoleBox'>
    
      {/* <AddNew/> */}
        <div className='role_table'>
        <h1 style={{textAlign:'center', paddingTop:'10px'}}>ROLES</h1>
        <Table striped>
      <thead>
        <tr>
          <th>Role ID</th>
          <th>Role Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>R1</td>
        <td>Admin</td>
        <td>Active</td>
        <td><UpdateRole/></td>
        </tr>
      </tbody>
    </Table>
      </div>
      <div className='addNewRole'>
      <Form style={{border: '1px solid black',borderRadius:'10px'}}>
      <h3 style={{textAlign:'center'}}><b>Add New Role</b></h3>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Role ID</Form.Label>
        <Form.Control/>
        {/* <Form.Control value={empid} onChange={(e)=>setEmpId(e.target.value)} /> */}
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicPassword">
        <Form.Label>Role Name</Form.Label>
        <Form.Control/>
        {/* <Form.Control value={empname} onChange={(e)=>setEmpName(e.target.value)} /> */}
      </Form.Group>
      {/* {
      (sst === 1)
      ?<p style={{color:'green'}}>Registration Done</p>
      :<p style={{color:'red'}}>Something went wrong, try later!!!</p>
      } */}

      <Button >
        Submit
      </Button>
    </Form>

      </div>
    </div>
    </>
  )
}

export default Role

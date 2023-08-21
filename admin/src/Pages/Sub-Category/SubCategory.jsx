import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import "./SubCategory.css"
import Button from 'react-bootstrap/Button';
import {Col,Form} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import UpdateSubCategory from './UpdateSubCategory'
const Role=()=>
{
const[empData, setEmpData] =useState([])
  async function getData()
 {
    let response = await axios.get('http://localhost:5000/show')
    console.log(response.data)
    setEmpData(response.data)
 } 
  return (
    <>
    <div className='CategoryBox'>
        <div className='sub_table'>
        <h1 style={{textAlign:'center', paddingTop:'10px'}}>Sub Category</h1>
        <Table striped>
      <thead>
        <tr>
          <th>Category ID</th>
          <th>Sub Category ID</th>
          <th>Sub Category Name</th>
          <th>Sub Category Image</th>
        </tr>
      </thead>
      <tbody>
      {/* {
    empData.map((item,index) =>
    { 
        return(
            <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.password}</td>
        <td>{item.createdon}</td>
        <td>{item.status}</td>
        <td><UpdateUsers/></td>
       </tr>
        )
    })
} */}
        <tr>
        <td>C001</td>
        <td>Electronics</td>
        <td>Image</td>
        <td>GST15616</td>
        <td><UpdateSubCategory/></td>
        </tr>
      </tbody>
    </Table>
      </div>
      <div className='addNewCategory'>
      <Form style={{border: '1px solid black',borderRadius:'10px'}}>
      <h3 style={{textAlign:'center'}}><b>Add New Sub Category</b></h3>

      <Form.Group className="mb-1" controlId="formBasicEmail">
      <Form.Label for="cars">Choose a Category:</Form.Label>
        <Form.Select id="cars">
        <option value="C1">C1</option>
        <option value="C2">C2</option>
        <option value="C3">C3</option>
        <option value="C4" selected>Select Category</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Sub Category ID</Form.Label>
        <Form.Control/>
        {/* <Form.Control value={empid} onChange={(e)=>setEmpId(e.target.value)} /> */}
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicPassword">
        <Form.Label>Sub Category Name</Form.Label>
        <Form.Control/>
        {/* <Form.Control value={empname} onChange={(e)=>setEmpName(e.target.value)} /> */}
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicPassword">
        <Form.Label>Sub Category Image</Form.Label>
        <Form.Control type='file'/>
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

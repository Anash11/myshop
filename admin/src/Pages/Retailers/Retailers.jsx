import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import "./Retailers.css"
import UpdateRetailer from './UpdateRetailers'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';

const Offers=()=>
{
  return (
    <div className='retailerBox'>
    <h1 style={{textAlign:'center',position:'sticky',top:'0'}}><b>Retailers</b></h1>
      <Tabs
      defaultActiveKey="retailer"
      id="uncontrolled-tab-example"
      className="mb-3"
      >
      <Tab eventKey="retailer" title="Retailers" className='tab' >
        <div className='rtables'>
        <Table striped >
      <thead>
        <tr>
          <th>Retailer ID</th>
          <th>Shop Name</th>
          <th>Password</th>
          <th>Owner Name</th>
          <th>Registrartion No.</th>
          <th>Registrartion Doc.</th>
          <th>Profile Photo</th>
          <th>GST No.</th>
          <th>PAN No.</th>
          <th>Address</th>
          <th>State</th>
          <th>City</th>
          <th>Pincode</th>
          <th>Contatct No.</th>
          <th>Email</th>
          <th>Status</th>
          <th>Registration Date</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>Retailer ID</td>
          <td>Shop Name</td>
          <td>Password</td>
          <td>Owner Name</td>
          <td>Registrartion No.</td>
          <td>Registrartion Doc.</td>
          <td>Profile Photo</td>
          <td>GST No.</td>
          <td>PAN No.</td>
          <td>Address</td>
          <td>State</td>
          <td>City</td>
          <td>Pincode</td>
          <td>Contatct No.</td>
          <td>Email</td>
          <td>Status</td>
          <td>Registration Date</td>
          <td><UpdateRetailer/></td>
      </tr>
      </tbody>
    </Table>
        </div>
      </Tab>
      <Tab eventKey="add" title="Add New" className='tab'>
        Tab content for Profile
      </Tab>
    </Tabs>
    </div>
  )
}

export default Offers

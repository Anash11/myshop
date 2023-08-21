import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import axios from 'axios'
import Form from 'antd/es/form/Form';
import {useState,useEffect} from 'react'
import {
  //https://unicons.iconscout.com/release/v1.0.0/index.html
  UilSync,
  
} from "@iconscout/react-unicons";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <b>UPDATE CATEGORY</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{height:'400px'}}>
        
          <h6 style={{textAlign:'center'}}>CATEGORY ID : </h6>
        <form>
          <label style={{fontSize:'14px',paddingBottom:'12px'}}>Category Name</label>
          <br/>
          <input/>
          <br/>
          <label style={{fontSize:'14px',paddingBottom:'12px'}}>Category Image</label>
          <br/>
          <input/>
          <br/>
          <label style={{fontSize:'14px',paddingBottom:'12px'}}>GST Number</label>
          <br/>
          <input/>
        </form>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>UPDATE</Button>
      </Modal.Footer>
    </Modal>
  );
}

const UpdateRetailer=() =>{
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
     <UilSync style={{color:'green',}} onClick={() => setModalShow(true)}/>
     

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default UpdateRetailer;
// render(<App />);

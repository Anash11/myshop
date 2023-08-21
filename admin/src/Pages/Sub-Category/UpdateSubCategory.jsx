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
          <b>UPDATE ROLE</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{height:'300px'}}>
        <div>
          {/* <h6 style={{textAlign:'center'}}>USER ID : </h6> */}
        <form>
          <label style={{fontSize:'14px',paddingBottom:'12px'}}>Roll ID</label>
          <br/>
          <input/>
          <br/>
          <label style={{fontSize:'14px',paddingBottom:'12px'}}>Roll Name</label>
          <br/>
          <input/>
        </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

const UpdateCategory=() =>{
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
export default UpdateCategory;
// render(<App />);

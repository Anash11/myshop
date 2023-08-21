import * as React from 'react';
import "./App.css"
import {Menu} from "antd";
import logo from './images/myshop_logo.png'
import { Route , Routes, useNavigate} from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import User from "./Pages/User/User";
import Login from "./Pages/Login/Login";
import Role from "./Pages/Role/Role";
import Category from "./Pages/Category/Category"
import SubCategory from "./Pages/Sub-Category/SubCategory"
import Retailers from "./Pages/Retailers/Retailers"
import Customers from "./Pages/Customers/Customers";
import Offers from "./Pages/Offers/Offers";
import Profile from './Pages/User/Profile';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Nav from 'react-bootstrap/Nav';

import {
  //https://unicons.iconscout.com/release/v1.0.0/index.html
  UilEstate,
  UilUsersAlt,
  UilClipboardNotes,
  UilApps,
  UilDropbox,
  UilShop,
  UilBookReader,
  UilTagAlt,
  UilBox
} from "@iconscout/react-unicons";

function App(){
  const navigate = useNavigate()

  // const [age, setAge] = React.useState('');

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value);
  // };
  return(
    <>
    {/* <header><h5>Welcome Anas!!</h5></header> */}
    <header style={{
      position:'sticky',
      top:'0',
      zIndex:'1'
    }}>
    <img src={logo} alt=""  className="logo" />
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} 
        style={{marginLeft:'1300px'}}
      >
        <h6>Welcome Anas!!</h6>
        {/* <InputLabel id="demo-simple-select-standard-label"></InputLabel> */}
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          // value={age}
          // onChange={handleChange}
          // label="Age"
        >
          <MenuItem value="">
            {/* <em>None</em> */}
          </MenuItem>
          <MenuItem value={10}>
          <Nav.Link href="/profile" >My Profile</Nav.Link>
          </MenuItem>
          <MenuItem value={20}>Password Change</MenuItem>
          <MenuItem value={30}>Logout</MenuItem>
        </Select>
      </FormControl>
    </header>
    <div style={{display:"flex", flexDirection:"row"}}>
      
      <div className="sidebar">
      {/* <div className="logo">
        <img src={logo} alt="" />
      </div> */}
      <Menu className="menu" onClick={({key})=>{
          if(key === "signout"){
          }
          else{
            navigate(key);
          }
      }} 
      items={
        [
          {icon:<UilEstate/>, label: "Dashboard", key:"/dashboard"},
          {icon:<UilUsersAlt/>, label: "Users", key:"/user"},
          {icon:<UilClipboardNotes/>, label: "Roles", key:"/roles"},
          {icon:<UilApps/>, label: "Category", key:"/category"},
          {icon:<UilDropbox/>, label: "Sub-Category", key:"/subCategory"},
          {icon:<UilShop/>, label: "Retailers", key:"/retailers"},
          {icon:<UilBookReader/>, label: "Customers", key:"/customers"},
          {icon:<UilTagAlt/>, label: "Offers", key:"/offers"},
          {icon:<UilBox/>, label: "Third Party Products"},
        ]
      }>
      </Menu>
      </div>
      <div>
        <Content/>
      </div>
      {/* <Footer/> */}
    </div>
    {/* <footer>footer</footer> */}
    
    </>
    
  )
}
function Content(){
  return (
    <div>
      <Routes>
      <Route  path="/" Component={Login}></Route>
        <Route exact path="/dashboard" Component={Dashboard}></Route>
        <Route path="/user" Component={User}></Route>
        <Route path="/roles" Component={Role}></Route>
        <Route path="/category" Component={Category}></Route>
        <Route path="/subCategory" Component={SubCategory}></Route>
        <Route path="/retailers" Component={Retailers}></Route>
        <Route path="/customers" Component={Customers}></Route>
        <Route path="/offers" Component={Offers}></Route>
        <Route exact path="/profile" Component={Profile}></Route>
        {/*<Route path="/thirdPartyProduts" Component={User}></Route> */}
      </Routes>
    </div>
  )
}
export default App;

//material UI
//ckRJuMiLg;k0vBB7(Mehbiye-z4DPw%y
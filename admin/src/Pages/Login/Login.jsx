import React from 'react'
import './Login.css'
import login from '../../images/login.png'
const Login = () => {
  return (
    <div className= 'loginContainer'>
      <div className='box1'>
        <h1 style={{textAlign:'center',color:'black',marginTop:'10px'}}><b>LOGIN</b></h1>
        <br/>
        <form>
          <label style={{fontSize:'18px'}}>USER ID</label>
          <br/>
          <input style={{width:'300px',border: 'none',borderBottom: '2px solid black',background:'rgb(237,205,236)'}}/>
          <br/>
          <label style={{fontSize:'18px'}}>PASSWORD</label>
          <br/>
          <input style={{width:'300px',border: 'none',borderBottom: '2px solid black',background:'rgb(237,205,236)'}}/>
          <br/>
          <button className='loginButton'>Login</button>
        </form>
      </div>
      <div className='box2'>
      <img style={{height:'500px',width:'500px'}} src={login}  />
      </div>
    </div>
  )
}

export default Login

import React from 'react'
import Signin from './Signin'
import Signup from './Signup'
import { Outlet, Routes } from 'react-router-dom'
import { Route ,Link} from 'react-router-dom'

const MainLR = () => {
  return (
    <>
    
     <div className='main_Calss'>
      <div id='Main_Con'>
        <div className='left_part_con'>
            <div id='con1'>
                <h1 id='main_tital'>Welcome</h1>
                <p id='Some_text'>Everything you love, one click away.</p>
                <Link to="/auth/signup"> <button>REGISTER</button><br/><br/> </Link>
                <Link to="/auth/signin"><button style={{color:"red"}}>LOGIN</button></Link>
            </div>
        </div>
        
        <Outlet/>
       
      </div>
    </div>
    
    </>
  )
}

export default MainLR

import React, { useState } from 'react'
import Nav from "../Navbar/Nav.jsx";
import Welcome from './Welcome.jsx';
import img from "../../image/img1.png";
import Signupform from './Signupform.jsx';
import Signin from './Signin.jsx';


function Landingpage() {
    const [signup,setSignup]=useState(false)
    const handlesignup=()=>{
setSignup(true)
    }
    const [signin,setSignin]=useState(false)
    const handlesignin=()=>{
setSignin(true)
    }
    

  return (
    <>
    <div>
   <div className='flex'>
    
   <Nav/> 
  <img src={img} alt="img" className='h-70 w-70 justify-center mt-15' />
   <div className='flex px-2 gap-1'>
    <button className='w-40 h-13 mt-2 justify-center bg-blue-400 font-bold py-3 rounded-md hover:bg-blue-300'onClick={handlesignup}>Signup</button>
    <button className='w-40 h-13 mt-2 justify-center bg-blue-400 font-bold py-3 rounded-md hover:bg-gray-200'onClick={handlesignin} >Signin</button>
    </div>
   </div>
    {/* ✅ Using signup state here to conditionally render Signupform */}
    {signup && (
                    <div className="flex justify-center mt-4">
                         <Signupform setSignup={setSignup} />
                    </div>
                )}

                {/* ✅ Using signup state here to conditionally render Signinform */}
    {signin && (
                    <div className="flex justify-center mt-0">
                         <Signin setSignin={setSignin} />
                    </div>
                )}
    <Welcome/>
    </div>
   
        


        </>
  )
}

export default Landingpage
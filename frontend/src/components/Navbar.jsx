import React from 'react'
import {Link,useNavigate} from "react-router-dom"
import {useDispatch,useSelector} from 'react-redux'
import {reset,logout} from "../features/auth/authSlice" 
import NavbarP from './NavbarP'
function Navbar() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {user}=useSelector((state)=>state.auth)
    const onclicked=()=>{
        dispatch(logout())
        dispatch(reset())

        navigate("/")
    }
    const onclick=()=>{

        navigate("/add-form")
    }
  return (
   <div className="header">
    <ul>
    {user?<>
   
        <li>
            <button className='btn btn-block' onClick={onclicked} >
                Logout
            </button>
            
        </li>
    </>:<>

    </>}
       
    </ul>
   </div>
  )
}

export default Navbar
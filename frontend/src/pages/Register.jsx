import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"
import {register,reset} from "../features/auth/authSlice"
import Navbar from '../components/Navbar'

function Register() {
    const [formData,setFormData]=useState({
        name:"",
        email:'',
        password:"",
        cpassword:""
    }
    )
    const {name,email,password,cpassword}=formData

    const navigate=useNavigate()
    const dispatch=useDispatch()

    const {user,isLoading,isSuccess,isError,message}=useSelector((state)=>state.auth)

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }
        if(isSuccess || user){
navigate("/")
}
dispatch(reset())
    },[user,isSuccess,isError,message,dispatch,navigate])
    const onChange=(e)=>{
setFormData((prevstate)=>({
    ...prevstate,
    [e.target.name]:e.target.value,
    })
)
    }
    const onSubmit=(e)=>{
e.preventDefault();
console.log("ARslan Akmal");
if(password !==cpassword){
    toast.error("Password Does not match")
}
else{
    const userData={
        name,
        email,
        password
    }
    dispatch(register(userData))
}
    }
    if(isLoading){
        <h1>Loading....</h1>
    }
    
  return (
    <>
    <Navbar/>
   <section className='heading'>
<h1>Register</h1>
<p>Please Create An Account</p>
<div className="form-group">
<form onSubmit={onSubmit}>
   <input type="text" className='form-control' value={name} name="name" placeholder='Enter Your name' onChange={onChange}></input>
   <input type="email" className='form-control' value={email} name="email" placeholder='Enter Your Email' onChange={onChange}></input>
   <input type="password" className='form-control' value={password} name="password" placeholder='Enter Your Password' onChange={onChange}></input>
   <input type="password" className='form-control' value={cpassword} name="cpassword" placeholder='Please Confirm Your password' onChange={onChange}></input>
<div className="form-group">
    <button type="submit" className="btn btn-block">Submit</button>
</div>
</form>
</div>
   </section>
   </>
  )
}

export default Register
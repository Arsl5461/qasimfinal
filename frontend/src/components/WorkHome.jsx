import React from 'react'
import {useEffect} from 'react'
import Cards from "../components/Cards"
import {useSelector,useDispatch} from "react-redux"
import {getAllGoals} from "../features/goals/goalSlice"
import {useNavigate} from "react-router-dom"
import NavbarP from './NavbarP'
import Footer from './Footer'
const WorkHome = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {goals,isError,message}=useSelector((state)=>state.goals)
  useEffect(()=>{
    if(isError){
      console.log(message);
    }
    dispatch(getAllGoals())


  
  },[])
  return (
    <>
    <h1 className='about_heading'>Our Work</h1>
    <div className='work'>

    {goals.length>0?( <Cards/>):(<p>No Work To Show</p>)}
    
   
    </div>
    </>
  )
}


export default WorkHome;
import {useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import GoalForm from '../components/GoalForm'
import GoalItem from '../components/GoalItem'
import { getGoals,reset } from '../features/goals/goalSlice'
import Navbar from '../components/Navbar'

function Dashboard() {
  const navigate=useNavigate()
  const dispatch=useDispatch()


  const {user}=useSelector((state)=>state.auth)
  const {goals,isLoading,isError,isSuccess,message}=useSelector((state)=>state.goals)




  useEffect(()=>{
    if(isError){
      console.log(message);
    }
    if(!user){
      navigate("/home")
    }
    dispatch(getGoals())


  
  },[user,navigate,isError,message,dispatch])
  return (
    <>
    <Navbar/>
   <section className="heading">
    <h1>Welcome  {user && user.name}</h1>
    <small>Add Blog post</small>
   <GoalForm/>

   {goals.length > 0 ? (
    <div className='goals'>
    {goals.map((goal)=>(
    <GoalItem key={goal._id} goal={goal}/>
   ))}
   </div>
   ):
    ("There are No Goals")}
   </section>
   </>
  )
}

export default Dashboard
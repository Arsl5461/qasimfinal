import {useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {createGoal} from "../features/goals/goalSlice"
import "./GoalForm.css"
function GoalForm() {
   const[text,setText]=useState('')
   const [body,setBody]=useState('')
   const [category,setCategory]=useState("")
const dispatch=useDispatch()
    
      
const onSubmit=(e)=>{
    e.preventDefault()
    dispatch(createGoal({text,body,category}))
    setText('')
    setBody('')
    setCategory("")
    }

  return (
    <div className="form-group">
    <form onSubmit={onSubmit}>
      <label>Company Name:</label>
<input type="text" name="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter Company Name"/>
<label>Company Description:</label>
<textarea type="text" name="body" value={body} onChange={(e)=>setBody(e.target.value)} placeholder="Enter Description"/>
<label>
  Company Title:
</label>
<input type="text" name="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Enter Title"/>

<button className='btn btn-block'> Submit</button>
    </form>
  </div>
  )
}

export default GoalForm
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addunit } from '../redux/reducer';
import { useNavigate } from 'react-router-dom';

export default function Addunit() {
    const dispatch = useDispatch();
    const [nameunit,setNameunit] = useState("")
    const Navigate = useNavigate()
    const btnSave = () => {
        dispatch(addunit({name:nameunit}))
        console.log(nameunit)

        setNameunit("")
        Navigate('/list')
  
    }
  return (
    <div>
      <h1>AddUnit</h1>
      <input type="text" value={nameunit} placeholder ='Enter name unit' onChange={(e)=>setNameunit(e.target.value)}></input>
      <button onClick={btnSave}>save</button>
    </div>
  )
}

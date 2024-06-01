// import React from 'react'

import { useState } from "react"

const Input = ({list,setList}) => {
    // const {list,setList}=props;
    const [input, setInput] = useState('');
    const [err,setErr]=useState(false)
    const addListHandler = () => {
        if(input!==""){
            const obj={
                title:input,
                show:false,
                id:Date.now()
            }
            console.log(input)
            const newList = [...list,obj]; //spread operator 
            // newList.push(obj);
            console.log({newList})
            setList(newList);
            setInput('');
        }else{
            setErr(true)
            // alert("Please Enter your task")
        }
        
      }
    return (
        <div>
            <input type='text' placeholder='Please Enter your task'
                onChange={(e) => {
                    setInput(e.target.value)
                }}
                value={input}
            />
            <button onClick={addListHandler}>Add+</button>

            {err && <p>Please Enter your task</p>}
        </div>)
}

export default Input
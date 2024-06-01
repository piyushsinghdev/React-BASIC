// import React from 'react'

import { useState } from "react"

const InputList = ({ item, delteHandler, updateHandler, index ,editHandler}) => {
   
  console.log(item,'ITEM',item.show);
  
  const [editText, setEditText] = useState(item.title);

  return (

    <div style={{ display: "flex" }} key={item.title}>
      {item.show?<input type="text" value={editText} onChange={(e) => { setEditText(e.target.value) }} />: <li key={item.title} >{item.title}</li>}
      {/* {item.show? <input type="text" value={editText} onChange={(e) => { setEditText(e.target.value) }} /> : 
      <li key={item.title} >{item.title}</li>} */}
      <button onClick={() => delteHandler(item.title)}>Delete</button>
      <button onClick={() => {
        if (item.show) {
          updateHandler(item.id, editText,index)

        } else {
          editHandler(item.id)
        }
      }
      }>
        {!item.show ? "Edit" : "Save"}
        </button>
    </div>
  )
}

export default InputList
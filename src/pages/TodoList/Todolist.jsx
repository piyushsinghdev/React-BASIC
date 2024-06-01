import { useState } from 'react';
import '../../App.css';
import Input from '../../components/Input'
import InputList from '../../components/InputList';

function Todolist() {
  const [list, setList] = useState([]);
  
  const delteHandler=(item)=>{
    const varaible=list.filter((value)=> {
      return value.title!==item
     })
    setList(varaible);
  }

  const deleteAllHandler =( )=>{
    const newItem=list.filter((item)=>item.title>3)
     setList(newItem)
  }

  const updateHandler =(id,value,index)=>{
    const currrentList=[...list]
    currrentList[index].title=value;
    currrentList[index].show=false;
    // currrentList.map((item)=>{
    //   if(item.id===id){
    //     item.title = value
    //   }
    //   return item
    // })
    setList(currrentList)
  }

  const editHandler = (id) =>{
    const currrentList=[...list]
    currrentList.map((item)=>{
      if(item.id===id){
        item.show = !item.show
      }
      return item
    })
    setList(currrentList);
  }
  
  const res=false;
  console.log(list)
  return (
    <>
      <div>
        <h1>ToDo List</h1>
        <Input list={list} setList={setList} name="" style={{}} />
        <button onClick={deleteAllHandler}>DeleteAll</button>
        <div>
          {list.map((item, index) =>
          (
            <InputList item={item} key={index} delteHandler={delteHandler}index={index}   updateHandler={updateHandler} editHandler={editHandler}/>
          )
          )}
        </div>
        <div>
        </div>
        {res? <div>Hello world</div>:<div>hELLO</div>}
      </div>

    </>
  )
}

export default Todolist

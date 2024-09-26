


import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo , EditTodo} from './Config/redux-config/reducer/todoslice'

const App = () => {

  const todoVal = useRef()
  const dispatch = useDispatch()
  const selector = useSelector(state => state.todos.todo);
  console.log(selector);


  const addTodoInRedux = (event) => {
    event.preventDefault()
    console.log("todo added", todoVal.current.value)
    dispatch(addTodo({
      title: todoVal.current.value
    }))
  }


  const deleteItemFromRedux = (index)=>{
    console.log("delete item" , index);
    dispatch(removeTodo({
      index
    }))
  }
  const editItem  = (index) =>{
    dispatch(
      EditTodo({
        index,
      })
    );
  };


  return (
    <>
      <form>
        <input type="text" ref={todoVal} />
        <button onClick={addTodoInRedux}>add Todo</button>

      </form>
        <ul>
          {selector.length > 0 ? selector.map((item , index) => {
            return <li key={item.id}>{item.title}
            <button onClick={()=>deleteItemFromRedux(index)}>delete</button>
            <button onClick={()=> editItem(index)} >Edit</button>
            </li>
          }) : <h1>No data found</h1>}
        </ul>
    </>
  )
}

export default App

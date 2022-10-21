import React from 'react'
import {useState} from 'react'
import styled from "styled-components"
const Form = styled.div`
    width: 700px;
    max-width: 90%;
    margin: 5px auto;
    padding: 20px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

   
    & input {
      width: 500px;
      border: 1px solid #ccc;
      font: inherit;
      line-height: 1.5rem;
      padding: 0 0.25rem;
      background-color:${(props)=>(props.isValid ? '':'red')};
      
    }
   
    & input:focus {
      height:45px;
      outline: none;
      background: #0aaaee;
      border-color: #3497c1;
     }
    & button{
      font: inherit;
      padding:5px;
      border: 1px solid #0aaaee;
      color: white;
      background: #0aaaee;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
      background:#3497c1;
      width: 100px;
      height:45px;
      margin:0 5px;
    }
    
    & button:hover, button:active {
      background: #0aaaee;
      border-color: #0aaaee;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
    }`


function AddTodo(props) {
    const[todo,setTodo]=useState('');
    const [isValid,setIsValid] = useState(true);
    function todoHandler(event){
        if(event.target.value.trim().length > 0){
            setIsValid(true);
        }
        setTodo(event.target.value)
    }

    function saveTodo(event){
        event.preventDefault();
        if(todo.trim().length === 0){
            setIsValid(false);
            return;
        };
        props.onTransfer(todo);
        setTodo('')
    }
  return (
     <form onSubmit={saveTodo} className="form">
        <Form isValid={isValid}>
         <label htmlFor="title"></label>
         <input 
             placeholder='Введите задачу'
             type="text"
             id="task"
             value={todo} 
             onChange={todoHandler}
         /><button type="submit">Добавить</button>
        </Form>
     </form>
    )
}

export default AddTodo
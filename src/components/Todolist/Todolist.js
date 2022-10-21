import React from 'react'
import styled from "styled-components"
const List = styled.ul`
    width: 700px;
    max-width: 90%;
    margin: 0 auto;
  
  & li{
    font-size:20px;
    margin: 1rem 0;
    background: #0aaaee;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    color: white;
    padding: 1rem 2rem;
    cursor: pointer;
    display:flex;
    justify-content: space-between;
  }
`
const Div= styled.div`
  display:flex;
  justify-content: space-between;
  button{
    border: 1px solid #0aaaee;
    color: white;
    background: #0aaaee;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
    background: #3497c1;
    border-color: #3497c1;
    width: 90px;
    height:45px;
  }
  & button:hover, button:active {
    background: #61af0d;
    border-color: #61af0d;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
}`
function Todolist(props) {
    return(
        <List>
            {props.todoList.map((item)=>(
                <li key={item.id} style={{textDecoration: item.status? '':'line-through'}}>{item.title} 
                  <Div>
                    <button onClick={props.onDeleteTodo(item.id)}>Удалить</button>
                    <button onClick={props.onDoneTodo(item.id)}>{
                       item.status?'Выполнить':'Выполнено'
                      }
                    </button>
                  </Div>
                 
                </li> 
            ))}
        </List>
    )
}

export default Todolist
import React from 'react'
import {useState} from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import Header from './components/Header/Header'
import Todolist from './components/Todolist/Todolist'

function App() {
	const [todoList,setTodoList]= useState([

	])

	function transfer(title){
	   setTodoList((prevList) => {
		return[...prevList,{
		 title: title,
		 id: Math.random().toString(),
		 status: true
		}];
	   });
	}
	function deleteTodo(id){
		return()=>{
			let newTodo=[...todoList].filter(item=>item.id!==id)
            setTodoList(newTodo)
		}
    }
	function doneTodo(id){
		return()=>{
			let newTodo=[...todoList].filter(item=>{
				if(item.id == id){
					item.status=!item.status
				}
				return item
			})
            setTodoList(newTodo)
		}

    }
	
	
	return (
		<div className='App'>
			<Header/>
			<AddTodo onTransfer={transfer}/>
			<Todolist todoList={todoList} onDeleteTodo={deleteTodo} onDoneTodo={doneTodo}/>
		</div>
	)
}

export default App

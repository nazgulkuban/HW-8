import React from 'react'
import styled from 'styled-components'

const Div=styled.div`
   width: 700px;
    max-width: 90%;
    margin: 0 auto;
    font-size:20px;
    background: #0aaaee;
    padding: 20px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
    border-radius: 10px;  
    text-align:center;
    color:white;
    font-size:30px;
`
function Header() {
  return (
    <Div>Задачи</Div>
  )
}

export default Header
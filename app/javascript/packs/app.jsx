
import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from '../components/navbar'
import TodoInput from '../components/todo_input'


const App = props => (
  <>
    <Navbar />
    <TodoInput />
  </>
)


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />,
    document.getElementById("root"),
  )
})

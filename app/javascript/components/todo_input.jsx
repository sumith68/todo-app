import React from "react"

function TodoInput() {
  const [todo, setTodo] = React.useState("")
  const [todos, setTodos] = React.useState([])
  const [error, setError] = React.useState("")
  const [alertCss, setAlertCss] = React.useState("")

  function handleChange(event) {
    setTodo(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (todo.trim().length === 0) {
      setError("Invalid Todo: Todo cannot be blank")
    } else {
      setTodos(prevTodos => [...prevTodos, todo])
      setTodo("")
    }
  }

  function handleClick(event, index) {
    const newTodos = todos.filter((todo, ind) => ind !== index)
    setTodos(newTodos)
  }

  function alertClose() {
    setAlertCss("hidden")
  }


  function ErrorAlert() {
    if (error.length !== 0) {
      return (
        <div className={`${alertCss} max-w-md mx-auto bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative`} role="alert">
          <strong className="font-bold">{error}</strong>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" onClick={alertClose} /></svg>
          </span>
        </div>
      )
    }
  }

  function TodoElement() {
    return todos.map(
      (todo, index) =>
        <div key={index} className="max-w-md mx-auto bg-gray-100 border border-gray-400 text-gray-900 px-4 py-3 rounded relative mb-1" role="alert">
          <span className="block sm:inline">{todo}</span>
          <span className="absolute top-0 bottom-0 right-0 px-2 py-1">
            <button className="flex-shrink-0 bg-gray-700 hover:bg-gray-900 border-gray-700 hover:border-gray-900 text-sm border-4 text-white py-1 px-2 rounded" onClick={(event) => handleClick(event, index)} >Remove</button>
          </span>
        </div>
    )
  }


  return (
    <div>
      {ErrorAlert()}
      <form className="max-w-md mx-auto mb-2" onSubmit={handleSubmit}>
        <div className="flex items-center border-b border-b-2 border-gray-500 py-2">
          <input type="text" value={todo} onChange={handleChange} placeholder="Todo...." className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
          <button className="flex-shrink-0 bg-gray-700 hover:bg-gray-900 border-gray-700 hover:border-gray-900 text-sm border-4 text-white py-1 px-2 rounded">Add</button>
        </div>
      </form>


      {TodoElement()}




    </div>
  )
}

export default TodoInput
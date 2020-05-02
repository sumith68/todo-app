import React from "react"

function TodoElement(props) {

  return props.todos.map(
    (todo) =>
      <div key={todo.id} className="max-w-md mx-auto bg-gray-100 border border-gray-400 text-gray-900 px-4 py-3 rounded relative mb-1" role="alert">
        <input type="checkbox" checked={todo.completed ? true : false} className="mr-2" onChange={(event) => props.updateTodo(todo)} />
        <span className={`block sm:inline ${todo.completed ? "line-through" : ""}`}>{todo.text}</span>
        <span className="absolute top-0 bottom-0 right-0 px-2 py-1">
          <button className="flex-shrink-0 bg-gray-700 hover:bg-gray-900 border-gray-700 hover:border-gray-900 text-sm border-4 text-white py-1 px-2 rounded" onClick={(event) => props.handleClick(event, todo.id)} >Remove</button>
        </span>
      </div>
  )
}

export default TodoElement
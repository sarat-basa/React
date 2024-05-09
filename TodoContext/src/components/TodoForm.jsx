import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';
function TodoForm() {
    const [inputVal, setInputVal] = useState("")
    const {addTodo} = useTodo()
    const uId = Date.now()
    const add = (e) => {
      e.preventDefault()

      if (!inputVal) return

      addTodo({ id:uId, todo : inputVal, completed: false})
      setInputVal("")
    }

  return (
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;
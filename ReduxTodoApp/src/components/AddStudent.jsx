import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
import { nanoid } from "@reduxjs/toolkit";
function AddStudent() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [number,setNumber] = useState('')

    const dispatch = useDispatch()
  
    const addStudent = () =>{
        dispatch(addTodo({
          id:nanoid(),
          name:name,
          email:email,
          number:number
        }))
        setName('')
        setEmail('')
        setNumber('')
    }

  return (
    <>
    <form  className="space-x-3 mt-12">
    <input
      type="text"
      className="rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <input
      type="text"
      className="rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type="text"
      className="rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Phone Number"
      value={number}
      onChange={(e) => setNumber(e.target.value)}
    />
    <button
      type="button"
      onClick={addStudent}
      className="text-white bg-indigo-500 border-0 py-2 px-6 m-5 focus:outline-none hover:bg-indigo-700 rounded text-lg"
    >
      Add Student
    </button>
  </form>
    </>

  )
}

export default AddStudent
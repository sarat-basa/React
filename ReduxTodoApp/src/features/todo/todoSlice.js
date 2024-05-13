import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    studentList : []
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action) => {
            const student = {
                id:action.payload.id,
                name:action.payload.name,
                email:action.payload.email,
                number:action.payload.number
            }
            state.studentList.push(student)
        },
        removeTodo:(state,action)=>{
            state.studentList = 
            state.studentList.filter((item)=> 
                item.id !== action.payload)
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer
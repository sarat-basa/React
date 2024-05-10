import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    studentList : [
        {id:2,name:"sarat",email:"sarat@gmail.com",number:7326034257 }
    ]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action) => {
            console.log(action.payload)
            const student = {
                id:nanoid(),
                name:action.payload.name,
                email:action.payload.email,
                number:action.payload
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
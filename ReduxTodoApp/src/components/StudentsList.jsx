import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'


export default function StudentsList() {
   const students = useSelector(state => state.studentList)
const dispatch = useDispatch()
  
   return (
    <>
    <div className="flex flex-wrap -mx-3 mb-5">
        <div className="w-full max-w-full px-3 mb-6  mx-auto">
            <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
            <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                    <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                        <span className="mr-3 font-semibold text-dark">Student List</span>
                    </h3>
                </div>
                <div className="flex-auto block py-8 pt-6 px-9">
                <div className="overflow-x-auto">
                    <table className="w-full my-0 align-middle text-dark border-neutral-200">
                    <thead className="align-bottom">
                        <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                        <th className="pb-3 text-start min-w-[175px]">Name</th>
                        <th className="pb-3 text-start min-w-[100px]">Email</th>
                        <th className="pb-3 text-start min-w-[100px]">Phone Number</th>
                        <th className="pb-3 pr-12 text-start min-w-[175px]">STATUS</th>
                        <th className="pb-3 text-start min-w-[50px]">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(students && students.length > 0) ?
                        students.map((st)=>(
                            <tr className="border-b border-dashed last:border-b-0" key={st.id}>
                                 <td className="p-3 pl-0">
                                    <div className="flex items-center">
                                        <div className="flex flex-col justify-start">
                                            {st.name}
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3 pl-0">
                                    <div className="flex items-center">
                                        <div className="flex flex-col justify-start">
                                            {st.email}
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3 pl-0">
                                    <div className="flex items-center">
                                        <div className="flex flex-col justify-start">
                                            {st.number}
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3 pl-0">
                                    <div className="flex items-center">
                                        <div className="flex flex-col justify-start">
                                            <h3>ACTIVE</h3>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3 pl-0">
                                    <div className="flex items-center">
                                        <div className="flex flex-col justify-start">
                                            <button onClick={() => dispatch(removeTodo(st.id))}>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )): <div className="flex text-center items-center pt-5">No Student Found</div>}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        
    </>
)
}

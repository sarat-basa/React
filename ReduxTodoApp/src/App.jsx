
import './App.css'
import AddStudent from './components/AddStudent'
import StudentsList from './components/StudentsList'

function App() {

  return (
    <>
     <h1 className='bg-gray-500 text-white h-10'>Redux Todo App</h1>
     <AddStudent/>
     <StudentsList />
    </>
  )
}

export default App

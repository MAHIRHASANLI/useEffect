import DoneToDo from "./DoneToDo"
import DeleteToDo from "./DeleteToDo"
const ToDoItem = ( {todos,setToDos,show,setShow}) => {
  return (
   
    todos && todos.map((data) => {
        return <li  className="product" key= {data.name}>{data} 
        <DoneToDo show={show} setShow={setShow} todos={todos} setToDos={setToDos}></DoneToDo>
        <DeleteToDo todos={todos} setToDos={setToDos}></DeleteToDo></li>
 })

  )
}

export default ToDoItem
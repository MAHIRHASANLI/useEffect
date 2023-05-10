

const SortbyIsDone = ({todos,setToDos,name,show, setShow}) => {
    function handeSort(){
        let array=[]
        todos && todos.map((item)=>{
            if(name.show===true){
                array.push(item)}
            })
       
            let sortShow = array.sort((a,b)=> a.show - b.show)
            setToDos(sortShow)
      
      }
  return (
    <button className="btn " onClick={handeSort} type="submit">Sort</button>
  )
}

export default SortbyIsDone
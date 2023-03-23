import React from "react"
import { useSelector } from "react-redux"
import Task from "../Task/Task"



const ListeTasks = () =>  { 

const list = useSelector((state) => state.listTasks)

    return (
        <div>
            {list.map(el =>
            <Task task={el} key={el.id}/>) }
        </div>
    )

        
    
}
export default ListeTasks
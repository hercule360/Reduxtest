import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { AddTask } from "../../JS/Actions/Actions"


const Add = () => {
    const dispatch = useDispatch() 
    const [text,setText] =  useState("")
   

    const handleAdd = () => { 

       

        if(text!==''){
            dispatch(AddTask({id : Math.random(), text ,isDone : false }))
        }else{
            alert ("can not add task text emtpy")
        }
    }
    return (

        <div>
              <Form.Control type="Text" placeholder="Enter NEW TASK"  onChange={(e)=>setText(e.target.value) }/>
              <Button variant="outline-primary"  type="submit"  onClick={()=>handleAdd()}>
              ADD 
            </Button>
        </div>
    )
        
    
}
export default Add
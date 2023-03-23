import React, { useState } from 'react'
 import { Button,  Form, Modal } from 'react-bootstrap'
 import { useDispatch } from 'react-redux'
 import { DELETE_TASK,DONE_TASK, EDIT_TASK } from '../../JS/ActionTypes/listTask'
 import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import './Task.css'
import { EditTask } from '../../JS/Actions/Actions'

const Task = ({task}) => {

 const dispatch=useDispatch()

 const[show,setShow]=useState(false);
const [newTask,setNewTask ] = useState(task.text)

 const handleClose =() => setShow(false);
 const handleShow =() => setShow(true);
 const handleEdit =() =>{

 dispatch (EditTask(task.id,newTask))
 handleClose()
 }

 return(

    <div className='task'  >
        


        <span className={task.isDone?'Done':'unDone'}>{task.text}</span>

        <Button variant='warning'  onClick= { handleShow }  > Edit </Button>
        <Button  variant='success'onClick={()=> dispatch(DONE_TASK(task.id))} > {task.isDone?'unDone':'Done'} </Button>
        <Button  variant='danger' onClick={()=> dispatch(DELETE_TASK(task.id))} >DELETE</Button>


      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Task a ajoute </Modal.Title>
        </Modal.Header>

         <Form.Group className="froms" >
        <Form.Label>Entre votre task address</Form.Label>
        <Form.Control type="text" placeholder=" entre le task" value={newTask}  onChange={(e)=>setNewTask(e.target.value)} />
        <Form.Text className="text-muted">
          ajouter une  phrase  with taks.
        </Form.Text>
      </Form.Group>

        <Modal.Footer>
          <Button variant="secondary" onClick={()=>handleClose()}>
            fermer 
          </Button>
          <Button variant="primary" onClick={()=>handleEdit()}>
            accepte 
          </Button>
        </Modal.Footer>
      </Modal>

      <div>
      
    <DropdownButton
      align="start"
      title="ALL Menu "
      className='drop'
    >
      <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
      <Dropdown.Item eventKey="2">Done</Dropdown.Item>
      <Dropdown.Item eventKey="3">DELETE</Dropdown.Item>
    </DropdownButton>
 
      </div>

    </div>

 )}

 export default Task 



     // <div className='Task-container'>
    //     <span className={task.isDone ? "Done" : null }> {task.text}</span>
    //     <Edit task={task} />
    // <button variant =" primary " onClick={()=> dispatch(deleteTask(task.id))}> DELETE</button>
    // <button variant =" primary " onClick={()=> dispatch(doneTask(task.id))}> 
    // Done </button>
    // </div>

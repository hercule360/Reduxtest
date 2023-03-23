import { ADD_TASK, DELETE_TASK , DONE_TASK , EDIT_TASK} from "../ActionTypes/listTask"




export const AddTask =(newTask) => {
    return{
        type: ADD_TASK , 
    payload :newTask    

        }
    }

    export const DeleteTask  =(id) => {
        return{
            type: DELETE_TASK , 
            paylod: id ,  
    
            }
        }
        export const DoneTask =(id) => {
            return{
                type : DONE_TASK , 
                paylod : id , 
            }

        

        }
        export const EditTask =(id,newTask) => {
            return   {
                type : EDIT_TASK, 
                paylod : {id,newTask}

            }
        }
        
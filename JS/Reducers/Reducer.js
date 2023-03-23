//importation 
import React from 'react'
import { ADD_TASK, DONE_TASK, EDIT_TASK ,DELETE_TASK } from "../ActionTypes/listTask";



//initialization satate 

const initialState ={
    listTasks :[
        {id : Math.random() ,text :"task1 " , isDone : false}, 
        {id : Math.random() , text :"task2" , isDone: true},
        {id : Math.random() , text :"task3" , isDone: false}

    ]
}



const Reducer = (state=initialState,{type,payload}) => {
   switch (type) {

    case DONE_TASK:
        return{
               ...state,listTasks : state.listTasks.map((el)=>el.id==payload?{...el,isDone:!el.isDone}:el)
        }

        case ADD_TASK:
            return{
                ...state,listTasks:[...state.listTasks,payload]  
            }
             
            case DELETE_TASK:
                return{
                    ...state, listTasks: state.listTasks.filter((el)=>el.id !==payload)
                }
             case EDIT_TASK :
                return{
                    ...state,listTasks:state.listTasks.map((el)=>el.id ===payload.id?{...el,text:payload.newtask}:el)
                }
    default: 
    return state
   }
  
}


export default Reducer


//pure faction 

// const  listeReducer = (state =initialState , {type , payload }) => {
//     switch (type){
//         case ADD_TASK : 
//         return{...state, listTasks:[...state.listTasks,payload]  }
//         case DELETE_TASK : 
//         return{...state, listTasks:state.listTasks.filter(el=>el.id!== payload)}
//         default :
//         return state ; 
//     }
// }
// export default listeReducer
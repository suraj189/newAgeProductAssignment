import { ADD_TASK } from "./Tasktypes.js"
import { EDIT_TASK } from "./Tasktypes.js"


export const AddTask=(task)=>{
    return{
         type:ADD_TASK,
         payload:task,
    }
}

export const EditTask=(task)=>{
    return{
        type:EDIT_TASK,
        payload:task,
   }
}



import { ADD_TASK } from "./Tasktypes"
import { EDIT_TASK } from "./Tasktypes"

const initialState = {
    task: {},
    edit: {}
}


const addTaskReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_TASK: {


            state.task = action.payLoad;
            return state;
        }
        case EDIT_TASK: {


            state.edit = action.payLoad[0];
            return state;
        }

        default: return state
    }


}

export default addTaskReducer
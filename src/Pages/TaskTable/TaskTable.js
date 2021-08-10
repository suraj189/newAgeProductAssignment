import React, { useState } from 'react'
import TaskProgressComponent from "../../Components/TaskProgressComponent/TaskProgressComponent"
import TaskCompleted from '../../Components/TaskCompleted/TaskCompleted'

const TaskTable = (props) => {
    const [revertTask,setrevertTask]=useState([])
    
    const [completed, setcompleted] = useState([])
    const [counter,setcounter]=useState(0)


    const handleRevert=(revertedTask)=>{// call back function from completed table
     setrevertTask(revertedTask)
    }

    const handleCompled=(CompletedTask)=>{// call back function from progress table
        setcompleted(CompletedTask)
    }

 
   
    return (
        <div className="wrapper">
            <TaskProgressComponent revertedtask={revertTask} handleCompleted={handleCompled}/>
            <TaskCompleted handleRevertedTask={handleRevert} CompletedTask={completed}/>
        </div>
    )
}

export default TaskTable

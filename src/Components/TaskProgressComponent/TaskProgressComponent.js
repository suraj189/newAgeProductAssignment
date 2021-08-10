import React, { useState, useEffect } from 'react'
import DataTable from '../DataTable/DataTable'
import "./TasKProgressComponent.css"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom";





const TaskProgressComponent = (props) => {
    let history = useHistory();
    const [progresstasks, setprogresstasks] = useState([])

    useEffect(() => {//effect to get the intial data
       console.log(props.task)
        setprogresstasks(JSON.parse(localStorage.getItem("progressTask")))
        if(Object.keys(props.task).length === 0 && props.task.constructor === Object){
            
        }else{
            setprogresstasks(tasks => [...tasks, props.task])// logic toi get data from redux store
           
        }
    }, [])

    useEffect(() => {//effect to get data from progress table to completed table
        if(props.revertedtask.length!==0){
        let tasks=[...JSON.parse(localStorage.getItem("progressTask"))]
       tasks.push(props.revertedtask[0])
       localStorage.setItem('progressTask',JSON.stringify(tasks))
       setprogresstasks(tasks)
        }
       
      },[props.revertedtask] );





    const handleAction = (cell, row, index, formatExtraData) => {
        return (
            <div className="actionContainer">
                <button onClick={()=>{handleEdit(index)}}>EDIT</button>
                <button onClick={() => handleDone(index)}>DONE</button>
            </div>
        )

    }

    const  handleSlNO=(cell,row,index,formatExtraData)=>{
       
        return(
            <p>{index}</p>
        )
    }
    const [columns, setColunms] = useState([{
        dataField: '',
        text: 'SL.NO',
        headerStyle: {
            backgroundColor: '#808080',
            color: "#000",
            fontWeight: "bold",
            width: "5%"
        },
        formatter: handleSlNO
    },
    {
        dataField: 'taskName',
        text: 'TASK NAME',
        headerStyle: {
            backgroundColor: '#808080',
            color: "#000",
            fontWeight: "bold"
        }
    },
    {
        dataField: 'startDate',
        text: 'CREATED',
        headerStyle: {
            backgroundColor: '#808080',
            color: "#000",
            fontWeight: "bold",
            width: "8%"
        }
    },
    {
        dataField: 'endDate',
        text: 'DUE',
        headerStyle: {
            backgroundColor: '#808080',
            color: "#000",
            fontWeight: "bold",
            width: "8%"
        }
    },

    {
        dataField: 'endDate',
        text: 'GO LIVE',
        headerStyle: {
            backgroundColor: '#808080',
            color: "#000",
            fontWeight: "bold",
            width: "8%"
        }
    },
    {
        dataField: 'assignee',
        text: 'ASSIGNEE',
        headerStyle: {
            backgroundColor: '#808080',
            color: "#000",
            fontWeight: "bold",
            width: "7%"
        }
    },
    {
        dataField: 'category',
        text: 'CATEGORY',
        headerStyle: {
            backgroundColor: '#808080',
            color: "#000",
            fontWeight: "bold",
            width: "8%"
        }
    },
    {
        dataField: 'status',
        text: 'STATUS',
        headerStyle: {
            backgroundColor: '#808080',
            color: "#000",
            fontWeight: "bold"
        }
    },
    {
        dataField: 'jiraId',
        text: 'JIRA ID',
        headerStyle: {
            backgroundColor: '#808080',
            color: "#000",
            fontWeight: "bold",
            width: "7%"
        }
    },
    {
        dataField: 'mockUp',
        text: 'MOCK-UP',
        headerStyle: {
            backgroundColor: '#808080',
            color: "#000",
            fontWeight: "bold",
            width: "8%"
        }
    },
    {
        dataField: 'otherComment',
        text: 'NOTES',
        headerStyle: {
            backgroundColor: '#808080',
            color: "#000",
            fontWeight: "bold",

        }
    },
    {
        dataField: 'action',
        text: 'Action',
        headerStyle: {
            backgroundColor: '#808080',
            color: "#000",
            fontWeight: "bold",
            width: "12%"
        },
        formatter: handleAction,
    },
    ])

    const handleEdit=(index)=>{//funtionc for editing the task again
        let progressTask=JSON.parse(localStorage.getItem("progressTask"))
        let EditTask= progressTask.splice(index,1)
        setprogresstasks(progressTask)
        localStorage.setItem("progressTask",JSON.stringify(progressTask))
        props.handleEditTask(EditTask)//dispatch funtion for redux to perform action
        history.push('/')

    }

    const handleDone = (index) => {//function for changing the status to completed
       
        let progressTask=JSON.parse(localStorage.getItem("progressTask"))
        let completedTask= progressTask.splice(index,1)
        setprogresstasks(progressTask)
        localStorage.setItem("progressTask",JSON.stringify(progressTask))
        
        completedTask[0].status="Completed"// for changing the status to completed
        props.handleCompleted(completedTask)// call back function to send data to parent component
    }


    return (
        <div >
            <h1 className="h2">Tasks In Progress</h1>
            <DataTable columns={columns} products={progresstasks} />
        </div>
    )
}

const mapStateToprops = state => {
    return {
        task: state.task
    }
}

const mapDisatchToProps=dispatch=>{
    return{
        handleEditTask:(value)=>{
            dispatch({
                type:"EDIT_TASK",
                payLoad: value
            })
        }
       
    }
}

export default connect(mapStateToprops,mapDisatchToProps)(TaskProgressComponent)

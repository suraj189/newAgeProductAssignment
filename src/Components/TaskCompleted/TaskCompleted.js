import React, { useState, useEffect } from 'react'
import "./TaskCompleted.css"
import DataTable from '../DataTable/DataTable'
import { connect } from "react-redux"



const TaskCompleted = (props) => {



  const [revertTask, setrevertTask] = useState([])
  const [tasks, setTasks] = useState([])

  const handleAction = (cell, row, index, formatExtraData) => {
    return (
      <div className="actionContainer">
        <button onClick={() => handleRevert(index)}>Revert</button>

      </div>
    )

  }

  useEffect(() => {


    setTasks(JSON.parse(localStorage.getItem("completedTask")))// for storing the inital data

  }, [])

  useEffect(() => {// efeect to run when data come from progress table
    if (props.CompletedTask.length !== 0) {
      let tasks = [...JSON.parse(localStorage.getItem("completedTask"))]
      tasks.push(props.CompletedTask[0])
      localStorage.setItem('completedTask', JSON.stringify(tasks))
      setTasks(tasks)
    }

  }, [props.CompletedTask]);




  const handleSlNO = (cell, row, index, formatExtraData) => {

    return (
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
    formatter: handleSlNO,
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
    dataField: 'otherNotes',
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


  const handleRevert = (index) => {// function for reverting back the completed task
    let completedTask = JSON.parse(localStorage.getItem("completedTask"))
    let revertedTask = completedTask.splice(index, 1)
    localStorage.setItem('completedTask', JSON.stringify(completedTask))
    setTasks(completedTask)
    
    revertedTask[0].status="In Deployment"
    props.handleRevertedTask(revertedTask)
  }
  return (
    <div>
      <h1 className="h2">Tasks Completed</h1>
      <DataTable columns={columns} products={tasks} />
    </div>
  )
}




export default TaskCompleted

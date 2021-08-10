import React, { useState ,useEffect } from 'react'
import moment from 'moment'
import { error } from '../../Static'
import {connect } from "react-redux"
import "./Taskform.css"
import { useHistory } from "react-router-dom";


const Taskform = (props) => {
    let history = useHistory();
    const [task, settask] = useState({
        taskName: "",
        category: "",
        jiraId: "",
        assignee: "",
        status: "",
        startDate: moment()
            .locale('en')
            .format('dd/mm/yyyy'),
        endDate: moment()
            .locale('en')
            .format('dd/mm/yyyy'),
        mockUp: "",
        otherComment: ""

    })

    const [iserror, seterror] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        seterror(false)
        settask(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const { taskName,
            category,
            jiraId,
            assignee,
            status,
            mockUp,
            otherComment } = task
            
        if (taskName.trim === "" || category === "" || jiraId.trim === "" || assignee === "" || status === "" || mockUp === "" || otherComment === "") {
            seterror(true)
        }else {
           props.AddTask(task)//for sdispatching the action
           history.push('/Task')
        }
    }

    useEffect(() => {// effect to run when data come from edit table
            settask({
                taskName: props.edit.taskName,
                category: props.edit.category,
                jiraId: props.edit.jiraId,
                assignee: props.edit.assignee,
                status: props.edit.status,
                startDate: props.edit.startDate,
                endDate: props.edit.endDate,
                mockUp: props.edit.mockUp,
                otherComment: props.edit.otherComment

            })
        
    }, [])
    return (
        <div className="formCointainer">
            <form>
                <div className="firstContainer">
                    <div>
                        <input
                            value={task.taskName}
                            onChange={handleChange}
                            name="taskName"
                            className="inputField"
                            placeholder="Task Name"

                        />
                    </div>
                    <div>
                        <select value={task.category}
                            onChange={handleChange}
                            name="category"
                            className="inputField"
                            placeholder="Select Category"  >
                            <option value="">Select Category</option>
                            <option value="NAP Bug Tak">Nap Bug Task</option>
                            <option value="Nap Dev">Nap Dev</option>
                            <option value="Project">Project</option>
                            <option value="Nap Enchament">Nap Enchament</option>
                            <option value="Nap Project">Nap Project</option>
                            
                        </select>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder='Jira ID'
                            value={task.jiraId}
                            onChange={handleChange}
                            name="jiraId"
                            className="inputField"
                        />
                    </div>
                </div>
                <div className="secondContainer">
                    <div>
                        <select className="inputField" placeholder="Select Assignee" value={task.assignee}
                            onChange={handleChange}
                            name="assignee">
                            <option value="">Select Assignee</option>
                            <option value="Bibhu">Bibhu</option>
                            <option value="Tanzil">Tanzil</option>
                            <option value="Project">Project</option>

                        </select>
                    </div>
                    <div>
                        <select className="inputField" placeholder="Select Status"
                            value={task.status} onChange={handleChange}
                            name="status">
                            <option value="">Select Status</option>
                            <option value="Completed">Completed</option>
                            <option value="On Hold">On Hold</option>
                            <option value="In Deployment">In Deployment</option>
                            <option value="In Qc">In Qc</option>

                        </select>
                    </div>
                    <div>
                        <input
                            type="date"
                            value={task.startDate}
                            name="startDate"
                            onChange={handleChange}
                            className="inputField"

                        />
                    </div>
                    <div>
                        <input
                            type="date"
                            value={task.endDate}
                            name="endDate"
                            onChange={handleChange}
                            className="inputField"


                        />
                    </div>
                </div>
                <div className="thirdContainer">
                    <input
                        type="text"
                        value={task.mockUp}
                        onChange={handleChange}
                        name="mockUp"
                        className="inputField"
                        style={{ width: "100%" }}
                        placeholder="Mock up" />
                </div>
                <div className="fouthContainer">
                    <textarea
                        style={{ width: "100%" }}
                        className="inputField"
                        value={task.otherComment}
                        placeholder="Other Comments"
                        name="otherComment"
                        onChange={handleChange} />
                </div>
                {iserror ? <p className="error">{error}</p> : ""}
                <div className="fithContainer">
                    <button className="primarySubmit" onClick={handleSubmit}>SUBMIT</button>
                </div>

            </form>
        </div>
    )
}

const mapStateToprops=state=>{
    return{
        edit:state.edit,
    }
}

const mapDisatchToProps=dispatch=>{
    return{
        AddTask:(value)=>{
            dispatch({
                type:"ADD_TASK",
                payLoad: value
            })
        }
    }
}
export default  connect(mapStateToprops,mapDisatchToProps)(Taskform)

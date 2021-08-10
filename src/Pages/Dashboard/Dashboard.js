import React ,{useEffect} from 'react'

import PrimaryBanner from "../../Components/PrimaryBanner/Banner"
import SecondaryBanner from "../../Components/SecondaryBanner/Banner"
import Products from "../../Components/Products/Product"
import DetailsCard from '../../Components/DetailsCard/DetailsCard'
import SecondaryDetailsCard from '../../Components/SecondaryDetailsCards/SecondaryDetailsCard'
import Taskform from '../../Components/TaskForm/Taskform'
import "./Dashboard.css"


 const Dashboard = () => {

    useEffect(() => {
    
        localStorage.setItem('completedTask',JSON.stringify([
            {
              sl: 1, taskName: "Aligment issue in Garage cabinet", startDate: "2021-03-09", endDate: "2021-03-05",
              endDate: "2021-03-10", assignee: "Bibhu", category: "NAP Bug Tak ", status: "Completed", jiraId: "NAPDI-1287", mockUp: "Link", otherNotes: ""
          },
          {
              sl: 2, taskName: "Kamode Page pop-up", startDate: "2021-03-09",
              endDate: "2021-03-09", endDate: "2021-03-09", assignee: "Bibhu", category: "Nap Dev", status: "Completed", jiraId: "NAPDI-1287", mockUp: "Link", otherNotes: ""
          },
          {
              sl: 3, taskName: "Reducing the size live chat ", startDate: "2021-02-23",
              endDate: "2021-02-20", endDate: "2021-04-08", assignee: "Tanzil", category: "Nap Project", status: "Completed", jiraId: "NAPDI-1287", mockUp: "Link", otherNotes: "This Project is hold till April 8th"
          },
          {
              sl: 4, taskName: "Remove the hp animation", startDate: "2021-03-09",
              endDate: "2021-03-09", endDate: "2021-03-09", assignee: "Bibhu", category: "Nap Dev", status: "Completed", jiraId: "NAPDI-1295", mockUp: "Link", otherNotes: "Qc Completedand working and working on Qc"
          }
          ]))

          localStorage.setItem('progressTask',JSON.stringify( [
            {
                sl: 1, taskName: "Contact Us Live chat Responsive Issue", startDate: "2021-03-09", endDate: "2021-03-05",
                endDate: "2021-03-10", assignee: "Bibhu", category: "NAP Bug Tak ", status: "In Qc", jiraId: "NAPDI-1287", mockUp: "Link", otherNotes: ""
            },
            {
                sl: 2, taskName: "Contact Us Live chat Deployment", startDate: "2021-03-09",
                endDate: "2021-03-09", endDate: "2021-03-09", assignee: "Bibhu", category: "Nap Dev", status: "In Deployment", jiraId: "NAPDI-1287", mockUp: "Link", otherNotes: ""
            },
            {
                sl: 3, taskName: "Cooking Appliancess", startDate: "2021-02-23",
                endDate: "2021-02-20", endDate: "2021-04-08", assignee: "Tanzil", category: "Nap Project", status: "On Hold", jiraId: "NAPDI-1287", mockUp: "Link", otherNotes: "This Project is hold till April 8th"
            },
            {
                sl: 4, taskName: "Update 404 Page nap", startDate: "2021-03-09",
                endDate: "2021-03-09", endDate: "2021-03-09", assignee: "Bibhu", category: "Nap Dev", status: "In Deployment", jiraId: "NAPDI-1295", mockUp: "Link", otherNotes: "Qc Completedand working and working on Qc"
            }
        ]
        ))
    }, [])
    return (
        <div className="wrapper" >
            <PrimaryBanner/>
            <SecondaryBanner/>
            <Products/>
            <DetailsCard/>
            <SecondaryDetailsCard/>
            <Taskform/>
        </div>
    )
}

export default Dashboard

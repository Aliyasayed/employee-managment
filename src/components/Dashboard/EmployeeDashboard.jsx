import React from 'react'
import Header from '../other/Header'
import TaskList from '../TaskList/TaskList'
import TaskNumberList from '../other/TaskNumberList'
import NewTask from '../TaskList/NewTask'


const EmployeeDashboard = (props) => {

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        
        <Header changeUser={props.changeUser} />
        <TaskNumberList data={props.data} />  
        <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
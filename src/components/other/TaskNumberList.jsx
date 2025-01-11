import React from 'react'

const TaskNumberList = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-red-300'>
      <h2 className='text-2xl font-bold'>{data.taskNumbers.newTask}</h2>
      <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-600'>
      <h2 className='text-2xl font-bold'>{data.taskNumbers.completed}</h2>
      <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-green-500'>
      <h2 className='text-2xl font-bold text-black'>{data.taskNumbers.active}</h2>
      <h3 className='text-xl font-medium text-black'>Accepted Task</h3>
      </div>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-purple-500'>
      <h2 className='text-2xl font-bold'>{data.taskNumbers.failed}</h2>
      <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    
    </div>
  )
}

export default TaskNumberList

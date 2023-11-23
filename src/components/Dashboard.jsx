import React from 'react'

const Dashboard = () => {
  return (
    <div className='w-full flex flex-col space-y-6 py-12 px-14 '>
         <h2>Dashboard</h2>
         <div className='flex space-x-8'>
                  <div className='w-2/5 h-[150px] border border-gray-300 rounded flex flex-col justify-center p-4 mt-5'>
                      <span>Fatema Khushboo</span>
                      <span className='text-gray-500'>Your Balance: $ 200</span>
                  </div>
                  <div className='w-2/5 h-[150px] border border-gray-300 rounded flex flex-col justify-center p-4 mt-5'>
                      <span>Fatema Khushboo</span>
                      <span className='text-gray-500'>Your Expenses: $ 200</span>
                  </div>
         </div>
         
         <div className='flex space-x-8'>
            <h2>Expense Chart</h2>
         </div>
         <div className='flex space-x-8'>
           
                  <div className='w-2/5 h-[150px] border border-gray-300 rounded flex flex-col justify-center p-4 mt-5'>
                      <span>Your Activity</span>
                      <span className='text-gray-500 mt-3'>You send $60 to your father</span>
                  </div>
                  <div className='w-2/5 h-[150px] border border-gray-300 rounded flex flex-col justify-center p-4 mt-5'>
                      <span>Pending Bill</span>
                      <span className='text-gray-500 mt-3'>Utility Bill: $200</span>
                  </div>
         </div>
        
    </div>
  )
}

export default Dashboard
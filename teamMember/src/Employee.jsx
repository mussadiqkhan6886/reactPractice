import React, { useState } from 'react'
import maleProfile  from './images/maleProfile.jpg'
import femaleProfile  from './images/femaleProfile.jpg'

const Employee = ({handleChangeTeam, handleShadow, selectedTeam, employees}) => {


  return (
    <main className='flex justify-between flex-col items-center p-3'>
      <div className='w-full text-center'>
        <select value={selectedTeam} onChange={handleChangeTeam} className='w-[50%] bg-gray-200 border-[1px] border-gray-400 p-1'>
          <option value="TeamA">TeamA</option>
          <option value="TeamB">TeamB</option>
          <option value="TeamB">TeamC</option>
          <option value="TeamD">TeamD</option>
        </select>
      </div>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {employees.map(employee => (
            <div id={employee.id} key={employee.id} onClick={handleShadow} className={`cursor-pointer mt-4 ${employee.teamName == selectedTeam ? 'border-3 border-black' : 'border-[1px] border-gray-400'}`}>
              {(employee.gender == "male") ? <img className='w-full' src={maleProfile} alt="male profile" /> : <img className='w-full' src={femaleProfile} alt="female profile" />} 
              <div className='flex flex-col p-2 gap-2'>
                <h3 className='text-wrap'> <span className='font-bold'> Full Name </span>: {employee.fullName}</h3>
                <p className='mb-3'> <span className='font-bold'> Designation </span>: {employee.designation}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Employee

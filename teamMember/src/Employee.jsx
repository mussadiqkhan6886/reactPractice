import React, { useState } from 'react'
import maleProfile  from './images/maleProfile.jpg'
import femaleProfile  from './images/femaleProfile.jpg'

const Employee = () => {

  const [selectedTeam, setSelectedTeam] = useState("TeamB")
  const [employees, setEmployees] = useState([{

    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }]);

  const handleChangeTeam = (e) => {
    setSelectedTeam(e.target.value)
  }

  const handleShadow = (e) => {
    const transformed = employees.map(employee => employee.id == parseInt(e.currentTarget.id) ? employee.teamName == selectedTeam ? {...employee, teamName: ""} : {...employee, teamName: selectedTeam} : employee);
    setEmployees(transformed)
  }

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
        <div className='grid grid-cols-3 gap-5'>
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

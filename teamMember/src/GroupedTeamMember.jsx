import React, { useState } from 'react'

const GroupedTeamMember = ({employees, setSelectedTeam, selectedTeam}) => {

    const [groupedEmployees, setGroupedData] = useState(groupedTeamMembers())

    function groupedTeamMembers(){
        let teams = []

        let teamAMember = employees.filter(employee => employee.teamName == "TeamA")
        let teamA = {team: "TeamA", members: teamAMember, collapsed: selectedTeam === "TeamA" ? false : true} 
        teams.push(teamA)

        let teamBMember = employees.filter(employee => employee.teamName == "TeamB")
        let teamB = {team: "TeamB", members: teamBMember, collapsed: selectedTeam === "TeamB" ? false : true} 
        teams.push(teamB)

        let teamCMember = employees.filter(employee => employee.teamName == "TeamC")
        let teamC = {team: "TeamC", members: teamCMember, collapsed: selectedTeam === "TeamC" ? false : true}
        teams.push(teamC)

        let teamDMember = employees.filter(employee => employee.teamName == "TeamD")
        let teamD = {team: "TeamD", members: teamDMember, collapsed: selectedTeam === "TeamD" ? false : true} 
        teams.push(teamD)

        return teams

    }

    const handleClick = (e) => {
        const transformedGroupData = groupedEmployees.map(groupData => groupData.team === e.currentTarget.id ? {...groupData, collapsed: !groupData.collapsed} : groupData)
        setGroupedData(transformedGroupData);
        setSelectedTeam(e.currentTarget.id)
    }

  return (
    <main className='flex flex-col justify-between items-center w-[60%] m-auto'>
        {groupedEmployees.map((item) => (
            <div key={item.team} className='flex flex-col justify-center items-center w-full'>
                <h4 className='border-[1px] border-gray-400 w-full text-center p-2 m-1 cursor-pointer bg-gray-200' id={item.team} onClick={handleClick}>Team Name: {item.team}</h4>
                <di id={"collapse_" + item.team} className={`w-full text-center border-[1px] border-gray-400 ${item.collapsed ? "hidden" : "block"}`}>
                    {item.members.map(member => (
                        <div className=' w-full p-2'>
                            <h5 className='font-semibold'> <span>Full Name: </span> {member.fullName}</h5>
                            <p className='text-[13px]'>Designation: {member.designation}</p>
                        </div>
                    ))}
                </di>
            </div>
        ))}
    </main>
  )
}

export default GroupedTeamMember

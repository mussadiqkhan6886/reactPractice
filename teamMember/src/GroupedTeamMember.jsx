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
    <main>
        {groupedEmployees.map((item) => (
            <div key={item.team}>
                <h4 id={item.team} onClick={handleClick}>Team Name: {item.team}</h4>
                <div id={"collapse_" + item.team} className={item.collapsed == true ? "collapsed" : ''}>
                    <hr />
                    {item.members.map(member => (
                        <div>
                            <h5> <span>Full Name: </span> {member.fullName}</h5>
                            <p>Designation: {member.designation}</p>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </main>
  )
}

export default GroupedTeamMember

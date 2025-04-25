import React from 'react'

const Header = ({selectedTeam, teamMemberCount}) => {
  return (
    <div className='text-center text-3xl font-bold m-3'>
      <h1>Team Member Allocation</h1>
      <h2>{selectedTeam} has {teamMemberCount} Members</h2>
    </div>
  )
}

export default Header

import React, { useState } from 'react'

const Skills = () => {
    const [myskills] = useState(['HTML','CSS','Javascript', 'ReactJS','SQL'])
  return (
    <div className='condiv skills'>
      <h1 className='subtopic'>My Skills</h1>
      <ul>
        {myskills.map((value)=>{
            return <li>{value}</li>
        })}
      </ul>
    </div>
  )
}

export default Skills

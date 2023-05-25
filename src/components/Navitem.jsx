import React from 'react'
import { Link } from 'react-router-dom'

const Navitem = ({item}) => {
  return (
    <li id={item}>
      <Link to={item.tolink}>{item}</Link>
    </li>
  )
}

export default Navitem

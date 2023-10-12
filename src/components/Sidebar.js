import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"
const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log("isMenuOpen", isMenuOpen)
  //early return pattren
  if(!isMenuOpen) return null;
  return (
   <div className='p-5'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
     </ul>
     <h1 className='font-bold'>Subscriptions</h1>
     <ul>
        <li>Music</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Moviest</li>
     </ul>
     <h1 className='font-bold pt-5'>Watch Later</h1>
     <ul>
        <li>Music</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Moviest</li>
     </ul>
   </div>
  )
}

export default SideBar
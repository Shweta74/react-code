import React from 'react'
import {buttonList} from "../Constants"
import Button from "./Button"
const ButtonList = () => {
  return (
    <div className='flex'>
     { buttonList.map((list, index) => {
       return <Button key={index} name={list} />
      })}

      </div>
  )
}

export default ButtonList
import React from 'react';

const Button = ({name}) => {
  return (
    <div>
        <button className='py-1 px-5 ml-2 bg-gray-100 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button;
import React, { useState } from 'react'

const BoxCompo = () => {

 const [boxes,setBoxes] = useState([])
    const handleClick = () => {

        const newBox = {
            id:Math.random().toString()
        }

        console.log("clicked")

        setBoxes((preBox) =>[...preBox,newBox])
    }
  return (
    <div>BoxCompo

        <button onClick={handleClick}> Click</button>
      {boxes.map((box) => (
         <div key={box.id} className='Box'>   </div>
      ))}
    </div>
  )
}

export default BoxCompo




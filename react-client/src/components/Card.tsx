import React, { useState } from 'react'

export default function Card({ card, bgColor, selected }) {
  const [active, setActive] = useState(false)
  function toggleClick() {
    setActive(!active)
  }
  return (
    <>
      <div
        onClick={toggleClick}
        className={`flex justify-center py-4 px-8 mb-2 rounded-md cursor-pointer ${
          // :class="[selected ? `${bgColor} bg-opacity-50 shadow-md` : bgColor]"
          selected
            ? bgColor +
              ' bg-opacity-60 shadow-lg underline font-semibold text-white'
            : bgColor
        }`}
      >
        <p className="text-xl"> {card.title} </p>
      </div>
    </>
  )
}

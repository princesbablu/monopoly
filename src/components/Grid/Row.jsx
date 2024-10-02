import React from 'react'

export default function Row({children, className=""}) {
  return (
    <div className={`flex flex-wrap -mx-3 ${className}`}>
        {children}
    </div>
  )
}

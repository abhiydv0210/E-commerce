import React from 'react'

function Dropmenu() {
  return (
    <div className='mr-5'>
      <select
        className="  block w-full bg-slate-800 text-slate-50 p-2 text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
      >
        <option selected>All Category</option>
        <option value="India">Another Action</option>
        <option value="US">SomeThing Else Here</option>
        <option value="CA">Canada</option>
        
      </select>
    </div>
  )
}

export default Dropmenu

import React from 'react'
import BookList from '../components/BookList'

export default function Commission() {
  return (
    <>
   
    <div className="text-5xl text-center items-center p-14 font-mono bg-zinc-50">
    <span>Commission</span>
  </div>

    <div>
    <ul className="flex m-8">
      <li className="w-1/5 p-5">
        {/* Filters by authors */}
       <p className="text-sm text-gray-400 font-mono border-b-2 p-1">FILTERS</p>
       <div className="mt-2">
        
          <div> <input type="checkbox"/> Kim Jung Gi</div>
          <p><input type="checkbox"/> Dong Ho Kim</p>
          <p><input type="checkbox"/> Hoooook</p>
          <p><input type="checkbox"/> Peter Han</p>
       </div>
      </li>
      <li className="w-4/5">
        <BookList />
      </li>
    </ul>
  </div>
  </>
  )
}

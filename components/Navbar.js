import React from 'react'

export const Navbar = () => {
  return (
    <nav className='bg-white  w-[80vw] flex justify-between fixed top-10 right-[10vw] 
    rounded-full px-7 py-3' >
  <div className='logo flex gap-15 items-center'>
    <svg className='h-8 ' xmlns="http://www.w3.org/2000/svg"  >
   <path d="m13.511 5.853 4.005-4.117 2.325 2.381-4.201 4.005h5.909v3.305h-5.937l4.229 4.108-2.325 2.334-5.741-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2V8.122h5.909L3.708 4.117l2.325-2.381 4.005 4.117V0h3.473v5.853zM10.038 16.16h3.473v7.842h-3.473V16.16z">
  </path></svg>

  <ul className='flex gap-5 absolute left-[12vw]'>
    <li>Templates</li>
    <li>Marketplace</li>
    <li>Discover</li>
    <li>Pricing</li>
    <li>Learn</li>
  </ul>
  </div>
  <div >
    <button className='login bg-gray-400 h-10 w-14   absolute right-[14vw] font-bold  rounded-lg'>log in</button>
        <button className='signup bg-gray-900 h-[3vw] w-[10vw]  text-white font-bold rounded-full'>signup free</button>
  </div>
</nav>
  )
}

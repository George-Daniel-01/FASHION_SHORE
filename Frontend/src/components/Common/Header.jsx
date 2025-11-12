import React from 'react'
import { Topbar } from '../Layout/Topbar'
import { Narbar } from './Narbar'

export const Header = () => {
  return (
  <>
 <header className='border-b border-gray-200'>
   <Topbar/>
   <Narbar/>
 </header>
 
  </>
  )
}

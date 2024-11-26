import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import {Button} from '../../components/ui/button'
function Header() {
  return (
    <div className='p-3 px-5 flex gap-3 justify-between items-center shadow-md'>
        <div className='flex gap-3 items-center'>
            <Image src = "/logo.svg" alt = "logo" width = {30} height = {30} />
            <h2 className='font-bold'>AI Short Video Generator</h2>
        </div>
        <div className='flex gap-3 items-center '>
            <Button>Dashboard</Button>
            <UserButton />
        </div>
    </div>
  )
}

export default Header
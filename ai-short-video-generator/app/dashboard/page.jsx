"use client"
import React, { useState } from 'react'
import { Button } from '../../components/ui/button'
import EmptyState from './components/EmptyState'
import Link from 'next/link'
function Dashboard() {
    const [videoList, setVideoList] = useState([])
  return (
    <div>
    <div className='flex justify-between items-center'>
        <div className='font-bold text-2xl text-primary'>Dashboard</div> 
        <Link href='/dashboard/create-new'>
    <Button > + Create new</Button>
    </Link>
    </div>
    {videoList.length ==  0 &&<div>
        <EmptyState />
        </div>
        }
    </div>
  )
}

export default Dashboard
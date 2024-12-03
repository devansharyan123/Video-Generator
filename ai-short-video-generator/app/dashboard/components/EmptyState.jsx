import React from 'react'
import { Button } from '../../../components/ui/button'
import Link from 'next/link'
function EmptyState() {
  return (
    <div>
        <div className='p-5 py-24 flex  items-center flex-col gap-5 mt-10  border-4 border-dashed '>
    <div>You have no videos created</div>
    <Link href='/dashboard/create-new'>
    <Button >Create new video</Button>
    </Link>
    </div>
    </div>
  )
}

export default EmptyState
import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
export default function Page() {
  return(
    
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div >
        <Image src={'/login.jpg'} alt="login"
        width={500} height={200} 
        className=' w-3/4 object-contain'/>
      </div>
      <div className='flex items-center justify-center min-h-screen' >
          <SignIn />
      </div>
     
    </div>
  ) 
  
}
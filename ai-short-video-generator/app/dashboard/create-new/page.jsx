"use client"
import React, { useState } from 'react'
import SelectTopic from './components/SelectTopic'
import SelectStyle from './components/SelectStyle'  
import SelectDuration from './components/SelectDuration'
import { Button } from '../../../components/ui/button'
function CreateNew() {

  const [formData, setFormData] = useState([])
  const onHandleInputChange=(fieldName,fieldValue) => {
       console.log(fieldName,fieldValue)
       setFormData(prev =>({
        ...prev,
        [fieldName]:fieldValue
       }))
  }
 
  return (
    <div className='md:px-20'>
      <h2 className='font-bold text-4xl text-center text-primary'>Create New</h2>
      <div  className=' mt-10 p-10 shadow-md'>
        {/*Select Topic */}
        <SelectTopic  onUserSelect={onHandleInputChange}/>
        {/*Select Style*/}
        <SelectStyle onUserSelect={onHandleInputChange} />
        {/* Duration */}
         <SelectDuration onUserSelect={onHandleInputChange} />
        {/* Create Button */}
        <Button className='mt-10 w-full bg-primary text-white p-4 rounded-md'>Create Short Video</Button>
      </div>
    </div>
  )
}

export default CreateNew
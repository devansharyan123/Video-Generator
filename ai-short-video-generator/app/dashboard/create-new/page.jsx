"use client"
import React, { useState } from 'react'
import SelectTopic from './components/SelectTopic'
import SelectStyle from './components/SelectStyle'  
function CreateNew() {

  const [formData, setFormData] = useState([])
  const onHandleInputChange=(fieldName,fieldValue) => {
       console.log(fieldName,fieldValue)
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

        {/* Create Button */}
      </div>
    </div>
  )
}

export default CreateNew
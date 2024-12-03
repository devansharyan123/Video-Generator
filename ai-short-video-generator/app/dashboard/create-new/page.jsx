"use client"
import React, { useState } from 'react'
import SelectTopic from './components/SelectTopic'
import SelectStyle from './components/SelectStyle'
import SelectDuration from './components/SelectDuration'
import { Button } from '../../../components/ui/button'
import axios from 'axios'
function CreateNew() {

  const [formData, setFormData] = useState([])
  const onHandleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue)
    setFormData(prev => ({
      ...prev,
      [fieldName]: fieldValue
    }))
  }
  const onCreateClickHandler = () => {
    GetVideoScript()
  }
  const GetVideoScript = async () => {
    const prompt = 'Write a script to generate ' + formData.Duration + ' video on topic : ' + formData.topic + ' along with AI images prompt in ' + formData.imageStyle + ' for each scene and give me result in JSON format with image prompt and content text as field';
    console.log(prompt);
  
    try {
      const result = await axios.post('/api/get-video-script', { 
        prompt: prompt 
      }).then(res => {
        console.log(res.data)
      })
       // Log the response data
    } catch (error) {
      console.error('Error fetching video script:', error); // Handle errors gracefully
    }
  };
  
  return (
    <div className='md:px-20'>
      <h2 className='font-bold text-4xl text-center text-primary'>Create New</h2>
      <div className=' mt-10 p-10 shadow-md'>
        {/*Select Topic */}
        <SelectTopic onUserSelect={onHandleInputChange} />
        {/*Select Style*/}
        <SelectStyle onUserSelect={onHandleInputChange} />
        {/* Duration */}
        <SelectDuration onUserSelect={onHandleInputChange} />
        {/* Create Button */}
        <Button className='mt-10 w-full bg-primary text-white p-4 rounded-md' onClick={onCreateClickHandler}>Create Short Video</Button>
      </div>
    </div>
  )
}

export default CreateNew
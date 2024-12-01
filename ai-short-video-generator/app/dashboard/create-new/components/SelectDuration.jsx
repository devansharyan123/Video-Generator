import React,{useState} from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../../../../@/components/ui/select";

function SelectDuration({onUserSelect}) {
    const [selectedOption,setSelectedOption] = useState("");
  return (
    <div>
    <h2 className="font-bold text-2xl text-primary mt-10">Duration</h2>
    <p className="text-gray-500 pt-3 pb-3">Select time limit for the video</p>
    <Select  onValueChange = {(value) => {
      setSelectedOption(value)
      value != 'Custom Prompt'&&onUserSelect('Duration' , value )}}>
      <SelectTrigger className="w-full p-6 mt-2 text-lg">
        <SelectValue placeholder="Select Duration" />
      </SelectTrigger>
      
      <SelectContent >
       
          <SelectItem  value='30 Seconds'>
            <div className="pt-1 bg-white text-lg px-10 ">30 Seconds</div>
          </SelectItem>
          <SelectItem  value='60 Seconds'>
          <div className="pt-1 bg-white text-lg px-10 ">60 Seconds</div>
          </SelectItem>
      </SelectContent>
    </Select>
    </div>
  )
}

export default SelectDuration
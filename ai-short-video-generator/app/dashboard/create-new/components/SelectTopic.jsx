"use client";
import React,{useState} from "react";
import { Textarea } from "../../../../@/components/ui/textarea"
import {onValueChange} from "../../../../@/components/ui/select"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../@/components/ui/select";

function SelectTopic() {
  const options = [
    "Custom Prompt",
    "Random AI Story",
    "Scary Story",
    "Historical Facts",
    "Bedtime Story",
    "Motivational",
    "Fun Facts",
  ];
 const [selectedOption,setSelectedOption] = useState("");
  return (
    <div>
      <h2 className="font-bold text-2xl text-primary">Content</h2>
      <p className="text-gray-500 pt-3 pb-3">Select a topic for the video</p>
      <Select  onValueChange = {(value) => setSelectedOption(value)}>
        <SelectTrigger className="w-full p-6 mt-2 text-lg">
          <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        
        <SelectContent >
          {options.map((item, index) => (
            <SelectItem key={index} value={item}>
              <div className="pt-1 bg-white text-lg px-10 ">{item}</div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedOption === "Custom Prompt"&&(<div>
        <Textarea placeholder="Enter your custom prompt here..." className="w-full mt-4 p-4 border rounded-md" />
        </div>)}
    </div>
  );
}

export default SelectTopic;

import React, { useState } from 'react'
import Image from 'next/image'
function SelectStyle({onUserSelect}) {
    const options = [
        {
            name : 'Realistic',
            image : 'https://i.pinimg.com/736x/50/b2/ad/50b2ad31198ee84ef7c38862987410fe.jpg'
        },

        {
            name : 'Cartoon',
            image : 'https://i.pinimg.com/736x/b7/39/0e/b7390e4e962446b5958841452fc1f147.jpg'
        },

        {
            name : 'Comic',
            image : 'https://i.pinimg.com/736x/a3/00/9f/a3009f03502264f9af6d2be26d320d84.jpg'
        },

        {
            name : 'WaterColor',
            image : 'https://i.pinimg.com/736x/9a/f9/5d/9af95d645b0287055b309896b0dd84a7.jpg'
        },

        {
            name : 'GTA',
            image : 'https://i.pinimg.com/736x/0f/1e/55/0f1e551c04b945f710d98cba034bb0ad.jpg'
        },


    ]
    const [selectedOption, setSelectedOption] = useState()
  return (
    <div>
        <h2 className="font-bold text-2xl text-primary mt-7">Style</h2>
        <p className="text-gray-500 pt-3 pb-3">Select a Style for the video</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5">
            {options.map((item,index) => (
                <div key={index} className={`flex flex-col items-center  hover:scale-110 transition-all cursor-pointer rounded-xl
                ${selectedOption == item.name&&'border-4 border-primary'}`}>
                    <Image src={item.image} height={100} width={100} className=" h-48 w-full object-cover rounded-lg "
                    onClick={() =>{setSelectedOption(item.name)
                        onUserSelect('imageStyle', item.name)
                    }} />
                    <div className="text-center font-bold">{item.name}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SelectStyle
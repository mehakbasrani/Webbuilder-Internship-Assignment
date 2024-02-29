import React from 'react'
import desktop from "./assets/desktop.png"

const SmallCard = () => {
  return (
 <>
 <div className="md:ml-32 mt-5 mb-5 w-[495px] h-[44px] text-[#2C384A] text-[32px]">Related deals you might like for</div>
 <div className="ml-3 md:ml-32 md:flex">
  <div className="mt-3 md:ml-5 w-[333px] rounded-[12px] h-[425px] border flex flex-col justify-between">
      <img src={desktop} alt="desktop" className="w-[141px] h-[103px] m-auto" /> 
      <div className="flex ml-[15px] mb-[7px]">
        <div className="mr-2.5 pl-2 w-[69px] h-[28px] bg-[#F2F4F7] text-[#074786] rounded-[8px]">20% off</div>
        <div className="pl-2 w-[107px] h-[28px] bg-[#F2F4F7] text-[#074786] rounded-[8px]">Limited Time</div>       
      </div> 
      <div className="font-bold font-[#626E79] pl-1.5">WebBuilder 1</div>
      <div className="mb-[7px] pl-1.5">Computer  Modern clasic with wix support</div>  
      <div className="flex mb-[7px] ml-[15px]">
         <div className="text-[#5C6874] text-[20px]">$39.96</div>
         <div className="text-[#9FA9B3] text-[14px] pt-1.5 ml-1.5">$49.96</div>
         <div className="text-[#EF4C5D] text-[13px] pt-1.5 ml-1.5">(20% off)</div>
    </div>
    <button className=" ml-[15px] w-[292px] h-[48px] bg-[#1B88F4] rounded-[12px] font-[#FFFFFF] mb-2">View deal</button>
    </div>

    <div className="mt-3 md:ml-5 w-[333px] rounded-[12px] h-[425px] border flex flex-col justify-between">
      <img src={desktop} alt="desktop" className="w-[141px] h-[103px] m-auto" /> 
      <div className="flex ml-[15px] mb-[7px]">
        <div className="mr-2.5 pl-2 w-[69px] h-[28px] bg-[#F2F4F7] text-[#074786] rounded-[8px]">20% off</div>
        <div className="pl-2 w-[107px] h-[28px] bg-[#F2F4F7] text-[#074786] rounded-[8px]">Limited Time</div>       
      </div> 
      <div className="font-bold font-[#626E79] pl-1.5">WebBuilder 1</div>
      <div className="mb-[7px] pl-1.5">Computer  Modern clasic with wix support</div>  
      <div className="flex mb-[7px] ml-[15px]">
         <div className="text-[#5C6874] text-[20px]">$39.96</div>
         <div className="text-[#9FA9B3] text[14px] pt-1 ml-1.5">$49.96</div>
         <div className="text-[#EF4C5D] text-[13px] pt-1 ml-1.5">(20% off)</div>
    </div>
    <button className=" ml-[15px] w-[292px] h-[48px] bg-[#1B88F4] rounded-[12px] font-[#FFFFFF] mb-2">View deal</button>
    </div>

    <div className="mt-3 md:ml-5 w-[333px] h-[425px] rounded-[12px] border flex flex-col justify-between">
      <img src={desktop} alt="desktop" className="w-[141px] h-[103px] m-auto" /> 
      <div className="flex ml-[15px] mb-[7px]">
        <div className="mr-2.5 pl-2 w-[69px] h-[28px] bg-[#F2F4F7] text-[#074786] rounded-[8px]">20% off</div>
        <div className="pl-2 w-[107px] h-[28px] bg-[#F2F4F7] text-[#074786] rounded-[8px]">Limited Time</div>       
      </div> 
      <div className="font-bold font-[#626E79] pl-1.5">WebBuilder 1</div>
      <div className="mb-[7px] pl-1.5">Computer  Modern clasic with wix support</div>  
      <div className="flex mb-[7px] ml-[15px]">
         <div className="text-[#5C6874] text-[20px]">$39.96</div>
         <div className="text-[#9FA9B3] text[14px] pt-1 ml-1.5">$49.96</div>
         <div className="text-[#EF4C5D] text-[13px] pt-1 ml-1.5">(20% off)</div>
    </div>
    <button className=" ml-[15px] w-[292px] h-[48px] bg-[#1B88F4] rounded-[12px] font-[#FFFFFF] mb-2">View deal</button>
    </div>
</div>
</>
  )
}

export default SmallCard

import React from 'react'
import search from "./assets/search.svg"

const Navbar = () => {
  return (
    <>
    <div className="self-stretch bg-[#212731] flex flex-row items-center justify-center py-0 pr-[42px] pl-5 box-border max-w-full shrink-0 text-left text-sm text-lightgray font-inter lg:pr-[21px] lg:box-border">
      <div className="overflow-x-auto flex flex-row items-center justify-start pt-3.5 px-0 pb-[13px] box-border relative gap-[0px_41px] max-w-full mq750:gap-[0px_41px]">
       <div className="w-[312px] shrink-0 flex flex-row items-center justify-center py-0 pr-[22px] pl-0 box-border relative">
          <div className="w-[258px] rounded-lg bg-white box-border flex flex-row items-center justify-start pt-[5px] px-[9px] pb-2 z-[5] border-[1px] border-solid border-gainsboro-100">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 z-[6]"
              alt=""
              src={search}
            />
          </div>
        </div>

        <div className="w-[491px] shrink-0 flex flex-row flex-wrap items-center justify-center max-w-[calc(100%_-_533px)] [row-gap:20px]">
           <div className="w-[73px] flex flex-row items-start justify-start pt-[3px] pb-px pr-[3px] pl-0 box-border relative text-[#D1D6DA]">
                 Categories
             </div>
             <div className="flex-1 flex flex-row items-center justify-center relative text-[#D1D6DA]">
                Website Builders
             </div>
             <div className="flex flex-row items-center justify-center pt-[3px] px-0 pb-px relative text-[#D1D6DA]">
              Today's deals
             </div>
             </div>
          </div>
        </div>
    
    
 </>
  )
}

export default Navbar


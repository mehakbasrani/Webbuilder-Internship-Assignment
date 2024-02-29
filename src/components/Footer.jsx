const Footer = () => {
    return (
      <div className="flex-1 bg-[#212731] flex flex-col items-center justify-start pt-[54px] px-10 pb-10 box-border relative gap-[60px_0px] max-w-full z-[14] text-left text-smi text-silver font-inter lg:gap-[60px_0px]">
        <div className="w-[1024px] flex flex-row items-start justify-start max-w-full">
          <div className="w-[843px] flex flex-col items-start justify-start gap-[19px_0px] max-w-full">
           <div className="self-stretch md:flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
                <div className="w-[124px] flex flex-col items-start justify-start gap-[13px_0px]">
                  <div className="relative text-base leading-[24px] uppercase text-white z-[19]">
                    Categories
                  </div>
                 <div className="flex-1 relative leading-[20px] z-[21] text-[#B6BDC4]">
                      Web Builder
                  </div>
                  <div className="relative leading-[20px] z-[21] text-[#B6BDC4]">
                        Hosting
                      </div>
                     <div className="w-[116px] relative text-sm leading-[20px] inline-block z-[21] text-[#B6BDC4]">
                      Data Center
                    </div>
                    <div className="relative leading-[20px] whitespace-nowrap z-[21] text-[#B6BDC4]">
                      Robotic-Automation
                    </div>
                  </div>
                <div className="w-[502px] flex flex-col items-start justify-start gap-[10px_0px] max-w-full text-sm">
                  <div className="w-[325px] flex flex-row items-center justify-start sticky top-[0] z-[99] max-w-full text-base text-white">
                   <div className="h-5 w-[79px] relative z-[20]" />
                    <div className="relative leading-[24px] uppercase z-[21] ml-[-79px]">
                      Contact
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[1px_0px] max-w-full">
                    <div className="relative leading-[20px] z-[22] text-[#B6BDC4]">Contact</div>
                     <div className="self-stretch flex flex-row items-center justify-start gap-[0px_10px] max-w-full mq750:flex-wrap">
                        <div className="flex-1 flex flex-col items-start justify-start pt-2.5 pb-0 pr-1.5 pl-0 box-border min-w-[215px] max-w-full">
                         <div className="relative leading-[20px] z-[22] text-[#B6BDC4]">
                                Privacy Policy
                         </div>
                        </div>
                        <div className="hidden md:flex flex-row items-center justify-start gap-[0px_6px] text-smi text-lightgray">
                          <div className="relative leading-[22px] z-[22] text-[#B6BDC4]">
                            United States
                          </div>
                        </div>
                        <img
                          className="h-[9px] w-[15px] relative overflow-hidden shrink-0 z-[20]"
                          alt=""
                          src="/image-20.svg"
                        />
                      </div>
                       <div className=" mt-2 relative leading-[26px] z-[22] text-[#B6BDC4]">
                            Terms Of Service
                          </div>
                   </div>
                     
                     <div className="relative leading-[22px] z-[22] text-[#B6BDC4]">
                        Categories
                    </div>
                    <div className="relative leading-[22px] z-[22] text-[#B6BDC4]">
                      About
                    </div>
                </div>
              </div>
            </div>
         </div>
        </div>
     );
  };
  
  export default Footer;
  
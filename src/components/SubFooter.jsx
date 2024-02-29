const SubFooter = () => {
    return (
    <>
    <div className="mt-3 md:ml-32 md:flex md:justify-around w-[1024px] h-[171px] bg-[#FBFCFD] items-center">
      <div className="w-[398px] text-[32px]">
      Sign up and get exclusive special deals
      </div>  
      <div className="hidden md:flex">
        <div className="h-[52px] flex-1 relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-white min-w-[226px] max-w-full z-[19]" />
        <button className="h-[52px] cursor-pointer [border:none] py-4 pr-4 pl-5 bg-[#1B88F4] rounded-tl-none rounded-tr-xl 
            rounded-br-xl rounded-bl-none flex flex-row items-center justify-center">
          SignUp
        </button>
     </div>
   </div>
    </>
    );
  };
  
  export default SubFooter;
  
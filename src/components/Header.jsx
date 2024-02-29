import tick from './assets/tick.svg'
import rightArrow from './assets/rightArrow.svg'

const Header = () => {
    return (
        <>
        <div className="md:ml-32 md:mr-44 mt-2 py-2 text-29xl font-inter bordself-stretch">
          <h1 className="flex-1 relative text-inter font-normal">
            Best Website builders in the US
        </h1>
       <hr className="md:ml-18 md:mr-2" />
       <div className="flex ">
                <img src={tick} alt="" className="mr-2" />
                <span className="mr-5">  Last Updated  -  Feburary 2020</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.91878 3.66546C5.47444 2.04501 7.62526 1.04163 9.9999 1.04163C12.3745 1.04163 14.5253 2.04501 16.081 3.66546C17.6366 5.28593 18.5999 7.52638 18.5999 9.99996C18.5999 12.4735 17.6366 14.714 16.081 16.3345C14.5253 17.9549 12.3745 18.9583 9.9999 18.9583C7.62526 18.9583 5.47444 17.9549 3.91878 16.3345C2.36315 14.714 1.3999 12.4735 1.3999 9.99996C1.3999 7.52638 2.36315 5.28593 3.91878 3.66546ZM9.9999 2.29163C7.9563 2.29163 6.10713 3.15373 4.76731 4.54934C3.42751 5.94499 2.5999 7.87121 2.5999 9.99996C2.5999 12.1287 3.42752 14.055 4.76731 15.4505C6.10713 16.8462 7.9563 17.7083 9.9999 17.7083C12.0435 17.7083 13.8927 16.8462 15.2325 15.4505C16.5723 14.055 17.3999 12.1287 17.3999 9.99996C17.3999 7.87121 16.5723 5.94498 15.2325 4.54934C13.8927 3.15373 12.0435 2.29163 9.9999 2.29163Z" fill="#626E79"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M10 4.58337C10.5523 4.58337 11 5.04975 11 5.62504C11 6.20033 10.5523 6.66671 10 6.66671C9.44776 6.66671 9 6.20033 9 5.62504C9 5.04975 9.44776 4.58337 10 4.58337Z" fill="#626E79"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M8.7998 8.33325C8.7998 7.98807 9.06844 7.70825 9.3998 7.70825H10.1998C10.5312 7.70825 10.7998 7.98807 10.7998 8.33325V14.1666C10.7998 14.5118 10.5312 14.7916 10.1998 14.7916C9.86844 14.7916 9.5998 14.5118 9.5998 14.1666V8.95827H9.3998C9.06844 8.95827 8.7998 8.67844 8.7998 8.33325Z" fill="#626E79"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M8.2002 14.1666C8.2002 13.8215 8.46884 13.5416 8.8002 13.5416H11.6002C11.9316 13.5416 12.2002 13.8215 12.2002 14.1666C12.2002 14.5118 11.9316 14.7916 11.6002 14.7916H8.8002C8.46884 14.7916 8.2002 14.5118 8.2002 14.1666Z" fill="#626E79"/>
              </svg>
                <span className="ml-1">Advertising Disclosure</span>
                </div>
                <hr className="md:ml-18 md:mr-2" />
    </div>
   
            <div className="md:ml-32 flex flex-wrap mb-8">
                <div className="mr-3.5 md:mr-16">Tools</div>
                <div className="mr-3.5 md:mr-16">AWS Builder</div>
                <div className="mr-3.5 md:mr-16">Start Build</div>
                <div className="mr-3.5 md:mr-16">Build Supplies</div>
                <div className="mr-3.5 md:mr-16">Tooling</div>
                <div className="mr-3.5 md:mr-16">BlueHosting</div>
            </div>
            <div className="md:ml-32 flex flex-wrap mb-8">
          <div className="mr-2 md:mr-6 flex">Home <img src={ rightArrow} alt="" className="ml-5" /> </div>
                <div className="mr-2 md:mr-6 flex">Hosting for all <img src={ rightArrow} alt=""  className="ml-5" /></div>
                <div className="mr-2 md:mr-6 flex">Hosting <img src={ rightArrow} alt="" className="ml-5" /></div>
                <div className="mr-2 md:mr-6 flex">Hosting6 <img src={ rightArrow} alt="" className="ml-5" /> </div>
                <div className="mr-2 md:mr-6 flex">Hosting5  </div>

     </div>
   
      </>
    );
  };
  
  export default Header;
  
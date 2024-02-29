import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import stars from './assets/stars.svg'
import desktop from "./assets/desktop.png"
import trophy from './assets/trophy.svg'
import diamond from './assets/diamond.svg'


const Card = () => {
  return ( 
    <Container className="">
      <div className="relative top-4 w-[125px] h-[34px] flex bg-[#FF7724] text-[#FFF] rounded-xl">
        <img src={trophy} alt="" className="w-[20px] h-[20px] m-auto" />
        <p className="pt-1 mr-4">Best Choice</p>
      </div>
      <Row className="rounded-xl mb-5">
        <Col className="flex flex-col items-center justify-center">
                <img src={desktop} alt="" className="w-[141px] h-[103px] inline-block" />
                <p className="mt-3">Builder 1</p>
              </Col>
              <Col>
              <div className="w-[490px] relative text-base leading-[24px] text-dimgray-200 text-left inline-block max-w-full z-[21]">
              <b className="font-inter">
                WixPro 72-Inch Responsive Website Builder
              </b>
              <span className="font-inter">
                            - Comprehensive Digital Platform Creation Tool,
                            Streamlined Design Interface for Professional
                            Websites and Online Stores (Black/Blue)
                          </span>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[10px_0px] max-w-full">
                          <b className="leading-[24px] inline-block font-inter ">
                            Main highlights
                          </b>
                          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[18px] box-border max-w-full">
                            <div className="flex-1 relative text-base leading-[24px] font-inter text-dimgray-200 text-left inline-block max-w-full z-[22]">
                              [What You Get]: Receive the WixPro website builder
                              suite, access to premium design templates, an
                              extensive library of widgets and apps, and
                              detailed step-by-step guides.
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 relative text-base leading-[24px] font-inter text-[#1B88F4] text-left z-[18]">
                          Show more
                        </div>
              </Col>
              <Col>
                  <div className="m-auto w-[135px] h-[118px] rounded-[12px] bg-[#F3F9FF] ml-16">
                     <p className="m-auto text-center text-[32px] text-[#074786] font-normal">9.8</p>
                     <p className="text-center text-[#074786]">Exceptional</p>
                      <img src={stars} alt="" className="m-auto relative overflow-hidden shrink-0 z-[18]" />
                  </div>
                  <button className="mt-10 ml-10 w-[292px] h-[48px] bg-[#1B88F4] rounded-[12px] font-[#FFFFFF]">View deal</button>
              </Col>
          </Row>
      
          <div className="relative top-4 w-[125px] h-[34px] flex bg-[#FF7724] text-[#FFF] rounded-xl">
        <img src={diamond} alt="" className="w-[20px] h-[20px] m-auto" />
        <p className="pt-1 mr-4">Best Value</p>
      </div>    
      <Row className="rounded-xl mb-5">
              <Col  className="flex flex-col items-center justify-center">
                <img src={desktop} alt="" className="w-[141px] h-[103px] inline-block" />
                <p className="mt-3">Builder 1</p>
              </Col>
              <Col>
              <div className="w-[490px] relative text-base leading-[24px] text-dimgray-200 text-left inline-block max-w-full z-[21]">
              <b className="font-inter">
              SiteCraft 68-Inch Ultimate Web Design Studio
              </b>
              <span className="font-inter">
              - Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce
                Platforms (Green/White)
                          </span>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[10px_0px] max-w-full">
                          <b className="leading-[24px] inline-block font-inter ">
                            Main highlights
                          </b>
                          <div className="self-stretch flex flex- classNameitems-start justify-start py-0 pr-0 pl-[18px] box-border max-w-full">
                            <div className="flex-1 relative text-base leading-[24px] font-inter text-dimgray-200 text-left inline-block max-w-full z-[22]">
                                 [What You Get]: Gain access to the SiteCraft design studio,
                                 featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 relative text-base leading-[24px] font-inter text-[#1B88F4] text-left z-[18]">
                          Show more
                        </div>
              </Col>
              <Col>
                  <div className=" m-auto w-[135px] h-[118px] rounded-[12px] bg-[#F3F9FF] ml-16">
                     <p className="text-center text-[32px] text-[#074786] font-normal">9.5</p>
                     <p className="text-center text-[#074786]">Exceptional</p>
                      <img src={stars} alt="" className="m-auto relative overflow-hidden shrink-0 z-[18]" />
                  </div>
                  <button className="mt-10 ml-10 w-[292px] h-[48px] bg-[#1B88F4] rounded-[12px] font-[#FFFFFF]">View deal</button>
              </Col>
          </Row>

          <Row  className="rounded-xl mb-5">
              <Col  className="flex flex-col items-center justify-center">
                <img src={desktop} alt="" className="w-[141px] h-[103px] inline-block" />
                <p className="mt-3">Builder 1</p>
              </Col>
              <Col>
              <div className="w-[490px] relative text-base leading-[24px] text-dimgray-200 text-left inline-block max-w-full z-[21]">
              <b className="font-inter">
                WixPro 72-Inch Responsive Website Builder
              </b>
              <span className="font-inter">
                            - Comprehensive Digital Platform Creation Tool,
                            Streamlined Design Interface for Professional
                            Websites and Online Stores (Black/Blue)
                          </span>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[10px_0px] max-w-full">
                          <b className="leading-[24px] inline-block font-inter ">
                            Main highlights
                          </b>
                          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[18px] box-border max-w-full">
                            <div className="flex-1 relative text-base leading-[24px] font-inter text-dimgray-200 text-left inline-block max-w-full z-[22]">
                              [What You Get]: Receive the WixPro website builder
                              suite, access to premium design templates, an
                              extensive library of widgets and apps, and
                              detailed step-by-step guides.
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 relative text-base leading-[24px] font-inter text-[#1B88F4] text-left z-[18]">
                          Show more
                        </div>
              </Col>
              <Col>
                  <div className="m-auto w-[135px] h-[118px] rounded-[12px] bg-[#F3F9FF] ml-16">
                     <p className="text-center text-[32px] text-[#074786] font-normal">9.3</p>
                     <p className="text-center text-[#074786]">Exceptional</p>
                      <img src={stars} alt="" className="m-auto relative overflow-hidden shrink-0 z-[18]" />
                  </div>
                  <button className="mt-10 ml-10 w-[292px] h-[48px] bg-[#1B88F4] rounded-[12px] font-[#FFFFFF]">View deal</button>
              </Col>
          </Row>

          <Row  className="rounded-xl mb-5">
              <Col  className="flex flex-col items-center justify-center">
                <img src={desktop} alt="" className="w-[141px] h-[103px] inline-block" />
                <p className="mt-3">CDK</p>
              </Col>
              <Col>
              <div className="w-[490px] relative text-base leading-[24px] text-dimgray-200 text-left inline-block max-w-full z-[21]">
              <b className="font-inter">
                CDK Resposive Builder:
              </b>
              <span className="font-inter">
               An extensive library of widgets and apps, and detailed step-by-step guides
            </span>
            <div className="w-[61px] h-[26px] bg-[#F2F4F7] text-center rounded-[4px]">26%</div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[10px_0px] max-w-full">
                          <b className="leading-[24px] inline-block font-inter ">
                            Main highlights
                          </b>
                          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[18px] box-border max-w-full">
                            <div className="flex-1 relative text-base leading-[24px] font-inter text-dimgray-200 text-left inline-block max-w-full z-[22]">
                <div className="w-[505px] h-[115px] rounded-[12px] px-3 bg-[#FFF4ED]">
                  <div className="flex mb-2">
                    <div className="w-[40px] h-[28px] bg-[#FFF] mt-1.5 mr-2 pl-2">9.9</div> <span>building responsive</span>
                  </div>
                  <div className="flex mb-2">
                    <div className="w-[40px] h-[28px] bg-[#FFF] mr-2 pl-2">8.9</div> <span>Cool</span>
                  </div>
                  <div className="flex mb-2">
                    <div className="w-[40px] h-[28px] bg-[#FFF] mr-2 pl-2">8.9</div> <span>Docs</span>
                  </div>

                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 relative text-base leading-[24px] font-inter text-[#1B88F4] text-left z-[18]">
                          Show more
                        </div>
              </Col>
              <Col>
                  <div className="w-[135px] h-[118px] rounded-[12px] bg-[#F3F9FF] m-auto">
                     <p className="text-center text-[32px] text-[#074786] font-normal">9.3</p>
                     <p className="text-center text-[#074786]">Exceptional</p>
                      <img src={stars} alt="" className="m-auto relative overflow-hidden shrink-0 z-[18]" />
                  </div>
                  <button className="mt-10 ml-10 w-[292px] h-[48px] bg-[#1B88F4] rounded-[12px] font-[#FFFFFF]">View deal</button>
              </Col>
          </Row>
      </Container>
      
    
  )
}

export default Card

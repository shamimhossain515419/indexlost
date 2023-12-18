"use client"
import Container from '@/Components/Container/Container';
import Link from 'next/link';
import React, { useState } from 'react';
import { CiHome } from "react-icons/ci";
import { FaChartBar, FaWindows } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { BsThreeDots } from 'react-icons/bs';
import './index.css'
import Button from '@/Components/Button/Button';
import Image from 'next/image';
const page = () => {

     const [action, setAction] = useState(false)
     return (
          <div className='lostProduct'>


               <div className=' secondBg  py-4'>
                    <Container>
                         <div className='  flex items-center gap-3'>
                              <CiHome size={25} />
                              <Link className=' text-lg  font-medium duration-300    hover:text-[#F84C03]' href={"/"}> Home </Link>
                              <IoIosArrowForward size={20} />
                              <h1 className=' text-lg'> Your Result  </h1>
                         </div>
                    </Container>
               </div>

               {/* lost  product section  */}

               <Container>
                    <div className='  filterSection py-10 flex justify-start  sm:gap-4 xl:gap-5 '>
                         {/* filter section  */}
                         <div className='   md:w-[336px] boxshadow   rounded-xl'>

                              <div className='  shadow px-3 md:px-4   py-3  flex justify-between  gap-2 flex-wrap'>

                                   <div className=' text-lg font-bold  '>FILTERS</div>
                                   <div className=' primaryColor text-lg font-bold'>Clear All</div>

                              </div>

                              <div className=' p-3 md:p-4'>
                                   <div>
                                        <div className=' w-full'>
                                             <h1 className='heading-4 pb-2'>Keywords</h1>
                                             <input className='inputFled  w-full' type="text" placeholder='Enter keywords' name="" id="" />

                                        </div>
                                   </div>
                                   <div className=' mt-3'>
                                        <div className=' w-full'>
                                             <h1 className='heading-4 pb-2'>Location</h1>
                                             <input className='inputFled  w-full' type="text" placeholder=' Enter Location' name="" id="" />

                                        </div>
                                   </div>
                                   <div className=' mt-3'>
                                        <div>
                                             <h1 className='heading-4 pb-2'>Category</h1>
                                             <select className=' capitalize selectOption p-2 rounded-md   w-full'>
                                                  <option className=' text-base  md:text-lg   py-1' value="taka"> Select Category</option>
                                                  <option className=' text-base  md:text-lg   py-1' value="Phone"> Phone</option>
                                                  <option className=' text-base  md:text-lg   py-1' value="bag"> bag</option>
                                                  <option className=' text-base  md:text-lg   py-1' value="bike"> bike</option>
                                                  <option className=' text-base  md:text-lg   py-1' value="Books"> Books</option>
                                                  <option className=' text-base  md:text-lg   py-1' value="Pan"> Pan</option>

                                             </select>
                                        </div>
                                   </div>

                                   <div className=' mt-3'>
                                        <div className=' w-full '>
                                             <h1 className='heading-4 pb-2'>Date Posted</h1>
                                             <div>
                                                  <input className=' ' type="checkbox" name="" id="" />
                                                  <label className=' text-lg font-medium ml-2 textColor' htmlFor="">Past 24 hours</label>
                                             </div>
                                             <div>
                                                  <input className='  p-8' type="checkbox" name="" id="" />
                                                  <label className=' text-lg font-medium ml-2 textColor ' htmlFor="">Past week</label>
                                             </div>
                                             <div>
                                                  <input className='' type="checkbox" name="" id="" />
                                                  <label className=' text-lg font-medium ml-2 textColor ' htmlFor="">Past month</label>
                                             </div>
                                             <div>
                                                  <input className='' type="checkbox" name="" id="" />
                                                  <label className=' text-lg font-medium ml-2  textColor' htmlFor="">Any time</label>
                                             </div>

                                        </div>
                                   </div>
                                   <div className=' mt-5'>
                                        <Button bg={"bg-[#F84C03]"} className text={"Search"} paddingX={"px-[20px]"} paddingY={"py-[10px]"} ></Button>
                                   </div>
                              </div>




                         </div>

                         {/* lost product  */}

                         <div className=' w-full'>
                              <div className=' bg-[#EDEEF3]  rounded-md  py-3 px-3  flex justify-between'>
                                   <h1 className=' heading-1 font-bold '> Showing 1 - 12 of 455</h1>
                                   <div className=' flex  items-center justify-start gap-3'>
                                        <div className='  flex gap-5  items-center '>
                                             <div className={` primaryBg  text-white p-2 rounded-md   `}> <FaWindows size={20} /></div>
                                             <div className={` primaryBg  text-white p-2 rounded-md   `}> <FaChartBar size={20} /></div>

                                        </div>
                                        <select className=' capitalize selectOption p-2 rounded-md  w-[120px] sm:w-[200px]'>
                                             <option value="taka"> taka</option>
                                             <option value="Phone"> Phone</option>
                                             <option value="bag"> bag</option>
                                             <option value="bike"> bike</option>
                                             <option value="Books"> Books</option>
                                             <option value="Pan"> Pan</option>

                                        </select>

                                   </div>

                              </div>
                              <div className=' my-7'>

                                   <div className=' grid  md:grid-cols-2 gap-5'>

                                        <div className=' boxshadow p-4' >
                                             <div className=' '>
                                                  <div className='  h-[300px] rounded-lg overflow-hidden'>
                                                       <Image className='   object-cover w-full h-full ' width={400} height={300} src="https://i.ibb.co/9T0DwsG/Whats-App-Image-2023-11-26-at-12-37-03-bd5f6e7b.jpg" alt='image'></Image>
                                                  </div>
                                             </div>
                                             <div className=' my-3  flex justify-between items-center gap-2'>
                                                  <div className='  flex justify-start  gap-2 '>
                                                       <div>
                                                            <Image className=' w-[45px] h-[45px]   rounded-full' width={50} height={50} src="https://i.ibb.co/9T0DwsG/Whats-App-Image-2023-11-26-at-12-37-03-bd5f6e7b.jpg" alt='image'></Image>
                                                       </div>
                                                       <div>
                                                            <h2 className='  text-black text-base  md:text-lg    font-medium'>Md Shamim Hossain</h2>
                                                            <p className=' text-sm  -mt-2 md:text-base  font-normal  textColor'> React Developer  | MERN stack Developer</p>
                                                       </div>

                                                  </div>
                                                  <div>
                                                       <BsThreeDots size={22} />
                                                  </div>
                                             </div>

                                             <div>
                                                  <h3 className=' text-lg font-medium'> <span  className=' base font-bold'>  Product Name:  </span> Phone  </h3>
                                             </div>


                                             <div>

                                             </div>
                                        </div>
                                        <div>

                                        </div>

                                   </div>
                              </div>
                         </div>




                    </div>
               </Container>




          </div>
     );
};

export default page; 
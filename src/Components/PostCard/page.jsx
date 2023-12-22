"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { CiHeart, CiShare2, CiUser, CiViewBoard } from 'react-icons/ci';
import { FaRegComment, FaRegCopy, FaRegWindowClose } from 'react-icons/fa';
import { MdDeleteOutline, MdOutlineReport } from 'react-icons/md';
import { LiaEditSolid } from 'react-icons/lia';
import { IoCodeSharp, IoMdCode } from 'react-icons/io';

const PostCard = () => {
     const [active, setActive] = useState(false)
     return (
          <div>
               <div className=' relative boxshadow p-4' >
                    <div className=' '>
                         <div className='  h-[300px] rounded-lg overflow-hidden'>
                              <Image className='   object-cover w-full h-full ' width={400} height={300} src="https://i.ibb.co/9T0DwsG/Whats-App-Image-2023-11-26-at-12-37-03-bd5f6e7b.jpg" alt='image'></Image>
                         </div>
                    </div>
                    <div className='  relative my-3  flex justify-between items-center gap-2'>
                         <div className='  flex justify-start  gap-2 '>
                              <div>
                                   <Image className=' w-[45px] h-[45px]   rounded-full' width={50} height={50} src="https://i.ibb.co/9T0DwsG/Whats-App-Image-2023-11-26-at-12-37-03-bd5f6e7b.jpg" alt='image'></Image>
                              </div>
                              <div>
                                   <h2 className='  text-black text-base  md:text-lg    font-medium'>Md Shamim Hossain</h2>
                                   <p className=' text-sm  -mt-2 md:text-base  font-normal  textColor'> React Developer  | MERN stack Developer</p>
                              </div>

                         </div>
                         <div className=' '>
                              <div onClick={()=>setActive(true)} className=' hover:bg-[#FFF5F3] p-2 rounded-full  hover:text-[#F84C03] duration-200 relative cursor-pointer'>
                                   <BsThreeDots size={22} />
                              </div>

                         </div>

                         {
                              active ? <div className=' boxshadow p-3 absolute   right-1   z-30 bg-white rounded-md '>


                                   <div onClick={()=>setActive(false)} className='   flex justify-end hover:text-[#ea5858] duration-150 cursor-pointer top-1'>
                                        <FaRegWindowClose className='  block' size={20} />
                                   </div>
                                   <div className=' flex  my-2  hover:bg-[#FFF5F3] p-2 rounded-md cursor-pointer justify-start gap-2 items-center'>
                                        <div className=''>
                                             <CiUser size={18} />
                                        </div>
                                        <p className=' textColor text-sm   md:text-base  font-medium'>Follow @BitMart_Futures </p>
                                   </div>
                                   <div className=' flex  my-2 hover:bg-[#FFF5F3] p-2 rounded-md cursor-pointer justify-start gap-2 items-center'>
                                        <div className=''>
                                             <MdOutlineReport size={18} />
                                        </div>
                                        <p className=' textColor text-sm   md:text-base  font-medium'> Report Post </p>
                                   </div>
                                   <div className=' flex  cursor-pointer hover:bg-[#FFF5F3] p-2 rounded-md justify-start gap-2 items-center'>
                                        <div className=''>
                                             <LiaEditSolid size={18} />
                                        </div>
                                        <p className=' textColor text-sm   md:text-base  font-medium'>Edit Post </p>
                                   </div>
                                   <div className=' flex  cursor-pointer hover:bg-[#FFF5F3] p-2 rounded-md justify-start gap-2 items-center'>
                                        <div className=''>
                                             <MdDeleteOutline size={18} />

                                        </div>
                                        <p className=' textColor text-sm   md:text-base  font-medium'>Delete Post </p>
                                   </div>
                                   <div className=' flex  cursor-pointer hover:bg-[#FFF5F3] p-2 rounded-md justify-start gap-2 items-center'>
                                        <div className=''>
                                             <LiaEditSolid size={18} />

                                        </div>
                                        <p className=' textColor text-sm   md:text-base  font-medium'>Copy Post </p>
                                   </div>
                                   <div className=' flex  cursor-pointer hover:bg-[#FFF5F3] p-2 rounded-md justify-start gap-2 items-center'>
                                        <div className=''>
                                             <IoMdCode size={18} />

                                        </div>
                                        <p className=' textColor text-sm   md:text-base  font-medium'>Embed Post </p>
                                   </div>
                                   <div className=' flex  cursor-pointer hover:bg-[#FFF5F3] p-2 rounded-md justify-start gap-2 items-center'>
                                        <div className=''>
                                             <FaRegCopy size={20} />
                                        </div>
                                        <p className=' textColor text-sm   md:text-base  font-medium'>Copy Post </p>
                                   </div>
                              </div> : null
                         }


                    </div>

                    <div>
                         <h3 className=' text-lg font-medium'> <span className='  font-bold'>  Location:  </span> Dhaka Mirpur 12  </h3>
                         <h3 className=' text-lg font-medium'> <span className='  font-bold'>   Name:  </span> Phone  </h3>
                         <h3 className=' text-lg font-medium'> <span className='  font-bold'>   Phone:  </span> 012514521444  </h3>
                         <p className=' textColor text-sm   md:text-base  font-medium'>If  Harano is a brand, product, or term related to a specific industry, could you please provide more details or clarify your question? This will help me better understand your request and provide you with more relevant information or assistance.</p>
                    </div>
                    <hr className=' mt-1 ' />



                    <div className=' flex  py-2 flex-wrap justify-between gap-2 items-center '>
                         <div className=' hover:bg-[#FFF5F3] p-2 rounded-full  hover:text-[#F84C03] duration-200 cursor-pointer  flex items-center gap-1'>
                              <CiHeart size={23} />
                              <span>20</span>

                         </div>
                         <div className='hover:bg-[#FFF5F3] p-2 rounded-full  hover:text-[#F84C03] duration-200  cursor-pointer flex items-center gap-1'>
                              <FaRegComment size={20} />
                              <span>20</span>
                         </div>
                         <div className='hover:bg-[#FFF5F3] p-2 rounded-full  hover:text-[#F84C03] duration-200  cursor-pointer flex items-center gap-1'>
                              <CiViewBoard size={20} />
                              <span>20k</span>
                         </div>
                         <div className='hover:bg-[#FFF5F3] p-2 rounded-full  hover:text-[#F84C03] duration-200 cursor-pointer'>
                              <CiShare2 size={20} />
                         </div>
                    </div>


                    <div>

                    </div>
               </div>
          </div>
     );
};

export default PostCard;
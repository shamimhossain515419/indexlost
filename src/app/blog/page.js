import Image from 'next/image';
import React from 'react';
import viewImage from "../../assets/blogs/view image.png"
import image1 from "../../assets/blogs/Rectangle 5171 (1).png"
import image2 from "../../assets/blogs/Rectangle 5173.png"
import image3 from "../../assets/blogs/Rectangle 5171.png"
import Hero from '@/Components/Hero/Hero';
import Container from '@/Components/Container/Container';
import { CiUser } from 'react-icons/ci';
import { FaRegCalendarAlt } from 'react-icons/fa';
import './index.css';
const Blog = () => {
     return (
          <div>


               <div>
                    <Hero title={"All Blogs"} name={"Follow Our Blog for Updates"} Paragraph={"Our team of experts who have been in the profession for years focuses on helping you achieve optimal technical surface."}> </Hero>
               </div>

               <Container>

                    <div class="BlogSection mt-8 py-5">
                         <div class="  md:flex  justify-start   gap-4">
                              <div class=" w-100 ">
                                   <div class=" blogsCardBg">

                                        <div class="image">
                                             <Image class=" w-full  rounded-t-md" src={viewImage} alt="" />
                                        </div>
                                        <div>
                                             <div class=" flex  justify-between  align-center gap-2">
                                                  <div class=" flex   justify-center  gap-3">
                                                       <div className=' primaryColor'>
                                                            <CiUser size={20} />
                                                       </div>
                                                       <div> By Johnson</div>
                                                  </div>
                                                  <div class=" flex  items-center gap-3">
                                                       <div class="  flex justify-center gap-3">
                                                            <div className=' primaryColor'>
                                                                 <FaRegCalendarAlt size={20} />
                                                            </div>
                                                            <div>
                                                                 23 Sep, 2023
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div>
                                                  <h1 class="my-2"> The shocking revelation of our insurance.</h1>
                                                  <p>Lorem ipsum dolor sit amet consectetur. Amet dolor egestas fringilla
                                                       imperdiet
                                                       justo eget. Tristique sagittis pretium nulla tellus lectus rhoncus eget.
                                                       Blandit
                                                       malesuada dolor urna elementum elementum enim volutpat nunc nibh.</p>

                                             </div>

                                        </div>

                                   </div>
                              </div>
                              <div class=" flex   flex-col gap-7  justify-between  items-center      ">
                                   <div class=" smallCard  sm:flex   justify-start  items-center gap-2 h-full">
                                        <div className=' h-full w-full rounded-md'>
                                             <Image className='h-full w-full  rounded-md overflow-hidden ' src={image1} alt="" />
                                        </div>
                                        <div>
                                             <h1 className=' text-lg md:text-[22px]  font-medium '> World leading technical company since 1997</h1>
                                             <div class=" flex pt-3 items-center gap-3 justify-start">
                                                  <p>By Johnson</p>
                                                  <hr className=' w-[2px] h-[15px] bg-black ' />
                                                  <p>23 Sep, 2023</p>
                                             </div>
                                        </div>

                                   </div>
                                   <div class=" smallCard  sm:flex  justify-start  items-center gap-2 h-full">
                                        <div className=' h-full  w-full'>
                                             <Image className=' h-full w-full rounded-md ' src={image2} alt="" />
                                        </div>
                                        <div>
                                             <h1 className=' text-lg md:text-[22px]  font-medium '> World leading technical company since 1997</h1>

                                             <div class=" flex pt-3 align-items-center gap-2 justify-content-start">
                                                  <p>By Johnson</p>
                                                  <hr className='  w-[2px] h-[15px] bg-black ' />
                                                  <p>23 Sep, 2023</p>
                                             </div>
                                        </div>

                                   </div>
                                   <div class=" smallCard sm:flex   justify-start  items-center gap-2 h-full">
                                        <div className=' h-full w-full'>
                                             <Image className='h-full w-full rounded-md ' src={image3} alt="" />
                                        </div>
                                        <div>
                                             <h1 className=' text-lg md:text-[22px]  font-medium '> World leading technical company since 1997</h1>

                                             <div class=" flex pt-3 items-center gap-2 justify-start">
                                                  <p className='text-[16px]'>By Johnson</p>
                                                  <hr className='  w-[2px] h-[15px] bg-black ' />
                                                  <p className='text-[16px]'>23 Sep, 2023</p>
                                             </div>
                                        </div>

                                   </div>
                              </div>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default Blog
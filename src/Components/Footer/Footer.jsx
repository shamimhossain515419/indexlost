import React from 'react';
import Container from '../Container/Container';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
     return (
          <div className=' bg-black text-white  py-10'>
               <Container>

                    <div className=' text-white  grid sm:grid-cols-4 xl:grid-cols-6  gap-2 xl:gap-5  '>
                         <div className='  sm:col-span-1  xl:col-span-2 md:mr-9 '>
                              <div className=' logoBlack flex  items-center gap-4'>

                                   <Link href="/">   <h1>  <span>INDEX</span>LOST</h1> </Link>
                              </div>
                              <p className=' text-[18px] py-2  text-white   '> Experience state-of-the-art marketplace platform with the Kofejob. We combine the experience of our global community around the globe for a best marketplace theme.</p>
                              <div className=' flex gap-0 items-center  text-white   rounded-[10px] overflow-hidden'>
                                   <input className=' p-3  w-full  block text-black outline-none border-none ' type="text" placeholder='Your Email Address' name="" id="" />
                                   <div className=' flex justify-center cursor-pointer items-center  primaryBg  h-[49px] w-[150px] '>
                                        <FaLongArrowAltRight className=' hover:ml-3 duration-200' size={25} />
                                   </div>

                              </div>
                         </div>
                         <div>
                              <h1 className=' text-[26px] text-white pb-2' > Help & Supports</h1>
                              <Link className=' block my-1 text-[22x] hover:text-[#4F46E5] duration-300 hover:ml-3' href={'/'}>   About Us</Link>
                              <Link className=' block my-1 text-[22x] hover:text-[#4F46E5] duration-300 hover:ml-3' href={'/'}>Blogs</Link>
                              <Link className=' block my-1 text-[22x] hover:text-[#4F46E5] duration-300 hover:ml-3' href={'/'}> Login</Link>
                              <Link className=' block my-1 text-[22x] hover:text-[#4F46E5] duration-300 hover:ml-3' href={'/'}> Registers</Link>
                              <Link className=' block my-1 text-[22x] hover:text-[#4F46E5] duration-300 hover:ml-3' href={'/'}>  Forgot Password</Link>

                         </div>
                         <div>
                              <h1 className=' text-[26px] text-white pb-2' > Other Links</h1>
                              <Link className=' block my-1 text-[22x] hover:text-[#4F46E5] duration-300 hover:ml-3' href={'/'}>   About Us</Link>
                              <Link className=' block my-1 text-[22x] hover:text-[#4F46E5] duration-300 hover:ml-3' href={'/'}>Contact</Link>
                              <Link className=' block my-1 text-[22x] hover:text-[#4F46E5] duration-300 hover:ml-3' href={'/'}> Login</Link>
                              <Link className=' block my-1 text-[22x] hover:text-[#4F46E5] duration-300 hover:ml-3' href={'/'}> Registers</Link>
                              <Link className=' block my-1 text-[22x] hover:text-[#4F46E5] duration-300 hover:ml-3' href={'/'}>  Forgot Password</Link>

                         </div>
                         <div>
                              <h1 className=' text-[26px] text-white pb-2' > Other Links</h1>
                              <Link className=' block my-1 text-[22x] hover:text-[#4F46E5] duration-300 hover:ml-3' href={'/'}>   About Us</Link>
                              <Link className=' block my-1 text-[22x] hover:text-[#4F46E5] duration-300 hover:ml-3' href={'/'}>Contact</Link>
                              <Link className=' block my-1 text-[22x] hover:text-[#4F46E5] duration-300 hover:ml-3' href={'/'}> Login</Link>
                              <Link className=' block my-1 text-[22x] hover:text-[#4F46E5] duration-300 hover:ml-3' href={'/'}> Registers</Link>
                              <Link className=' block my-1 text-[22x] hover:text-[#4F46E5] duration-300 hover:ml-3' href={'/'}>  Forgot Password</Link>

                         </div>
                         <div>
                              <h1 className=' text-[26px] text-white pb-2' > Follow us</h1>
                              <Link className=' block my-1 text-[22x] hover:text-[#4F46E5] duration-300 hover:ml-3' href={'/'}>   Facebook</Link>
                              <Link className=' block my-1 text-[22x] hover:text-[#4F46E5] duration-300 hover:ml-3' href={'/'}>Instagram</Link>
                              <Link className=' block my-1 text-[22x] hover:text-[#4F46E5] duration-300 hover:ml-3' href={'/'}> Twitter</Link>
                              <Link className=' block my-1 text-[22x] hover:text-[#4F46E5] duration-300 hover:ml-3' href={'/'}> Linkedin</Link>
                              <Link className=' block my-1 text-[22x] hover:text-[#4F46E5] duration-300 hover:ml-3' href={'/'}>  Github</Link>

                         </div>

                    </div>

                    <div className=' py-3'>
                         <hr className=' mt-7' />
                         <div className=' md:flex mt-5 justify-between  items-center gap-1'>
                              <div className=' my-2'>
                                   <p className=' text-white text-[18px] '>Copyright 2023 ©  Indexlost. All right reserved. Powered by Dreamguys Technologies</p>
                              </div>
                              <div className=' my-3 flex gap-3  items-center flex-wrap '>
                                   <Link href={'/'}> Chat </Link>
                                   <Link href={'/'}> Faq </Link>
                                   <Link href={'/'}> Reviews </Link>
                                   <Link href={'/'}> Privacy Policy </Link>
                                   <Link href={'/'}>  Terms of use </Link>
                              </div>
                         </div>
                    </div>

               </Container>
          </div>
     );
};

export default Footer;
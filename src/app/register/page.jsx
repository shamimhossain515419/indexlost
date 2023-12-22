"use client"
import Button from '@/Components/Button/Button';
import Container from '@/Components/Container/Container';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
 import   register from '../../assets/Home/hero/photo-1496917756835-20cb06e75b4e.avif'
import Image from 'next/image';

const RegisterPage = () => {

     const [showPassword, setShowPassword] = useState(false);

     // Handler function to toggle the state
     const handleShowPasswordToggle = () => {
          setShowPassword(!showPassword);
     };
     return (
          <div>
               <Container>

                    <div className=' grid md:grid-cols-2'>

                         <div className=' py-20'>

                              <div>
                                   <h1 className=' text-[#111827] text-3xl font-semibold my-2 capitalize text-center'> Sign up to Indexlost</h1>
                              </div>
                              <div className=''>
                                   <div className=' py-7 max-w-[500px]  mx-auto'>
                                        <div className=' p-8   rounded-lg'>
                                             <form action="">
                                                  <div className=" py-3  w-full ">
                                                       <label className=' text-base  md:text-lg  font-medium' htmlFor="">Your Name  *</label>
                                                       <input className=' my-2 p-2 border  shadow focus:outline-[#F84C03] border-[#2B2B2B] block w-full rounded-md' type="text" placeholder='' name="" id="" />
                                                  </div>
                                                  <div className=" py-3  w-full ">
                                                       <label className=' text-base  md:text-lg  font-medium' htmlFor="">Email address *</label>
                                                       <input className=' my-2 p-2 border  shadow focus:outline-[#F84C03] border-[#2B2B2B] block w-full rounded-md' type="email" placeholder='' name="" id="" />
                                                  </div>
                                                  <div className=" py-3  w-full ">
                                                       <label className=' text-base  md:text-lg  font-medium' htmlFor="">Password *</label>
                                                       <input className=' my-2 p-2 border  shadow focus:outline-[#F84C03] border-[#2B2B2B] block w-full rounded-md' type={showPassword ? "text" : "password"} placeholder='' name="" id="" />
                                                  </div>
                                                  <div className=" py-3  w-full ">
                                                       <label className=' text-base  md:text-lg  font-medium' htmlFor=""> Confirm Password * </label>
                                                       <input className=' my-2 p-2 border  shadow focus:outline-[#F84C03] border-[#2B2B2B] block w-full rounded-md' type={showPassword ? "text" : "password"} placeholder='' name="" id="" />
                                                  </div>
                                                  <div className=' flex  justify-between gap-3'>
                                                       <div className='cursor-pointer flex items-center gap-2'>
                                                            <input
                                                                 className='p-2'
                                                                 type="checkbox"
                                                                 checked={showPassword}
                                                                 onChange={handleShowPasswordToggle}
                                                                 id="showPasswordCheckbox"
                                                            />
                                                            <label htmlFor="showPasswordCheckbox">Show password</label>
                                                       </div>
                                                       <div>
                                                            <button className=' text-lg font-bold text-blue-500 '>forgot password?</button>
                                                       </div>
                                                  </div>
                                                  <div className=' my-5'>
                                                       <Button paddingX={"px-[30px]"} paddingY={"py-[15px]"} hover={"bg-[#000]"} text={"Sing in"}></Button>
                                                  </div>
                                             </form>
                                             <div className=' flex items-center gap-3 px-6  my-4'>
                                                  <div className=' h-[1px]  bg-[#0909097d]  w-full '></div>
                                                  <div className=' text-bold text-xl '>or</div>
                                                  <div className=' h-[1px]  bg-[#0909097d]  w-full'></div>
                                             </div>

                                             <div className='  flex justify-between gap-2'>
                                                  <div className=' w-full flex justify-center
                                         items-center gap-1 p-2 rounded-md text-white cursor-pointer   primaryBg'>
                                                       <FaGoogle size={24} />
                                                  </div>
                                                  <div className=' w-full  cursor-pointer rounded-md flex justify-center
                                         items-center gap-1 p-2   bg-[#000] text-white'>
                                                       <FaGithub size={24} />
                                                  </div>
                                             </div>

                                        </div>
                                   </div>

                                   <div>
                                        <div className='  flex justify-center gap-2 items-center'>
                                             <p className=' text-base  md:text-xl font-medium  textColor'>Already have an account?  </p>
                                             <Link className=' text-base  md:text-xl font-medium   text-blue-500 ' href={'/login'}>Log in</Link>

                                        </div>
                                   </div>
                              </div>
                         </div>
                    
                      <div className=' hidden md:block py-20 h-full'>
                         <Image className=' h-full   object-fill ' src={register}  alt='image'></Image>
                          
                      </div>

                    </div>
               </Container>
          </div>
     );
};

export default RegisterPage;
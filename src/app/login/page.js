
"use client"
import Button from '@/Components/Button/Button';
import Container from '@/Components/Container/Container';
import { AuthContact } from '@/Controlar/GlobalState/GlobalState';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Login = () => {

     const [data, setSata] = useState(false);
     const [showPassword, setShowPassword] = useState(false);
     const { GoogleLogin } = useContext(AuthContact)

     // Handler function to toggle the state
     const handleShowPasswordToggle = () => {
          setShowPassword(!showPassword);
     };

     const handleGoogle = async () => {
          const result = await GoogleLogin();
          if (result.user?.email) {
               Swal.fire("SweetAlert2 is working!");
          }
     }

     return (
          <div>

               <Container>
                    <div className=' py-20'>

                         <div>
                              <h1 className=' text-[#111827] text-3xl font-semibold my-2 capitalize text-center'> Sign in to Indexlost</h1>
                         </div>
                         <div className=''>
                              <div className=' py-7 max-w-[500px]  mx-auto'>
                                   <div className=' p-8  shadow rounded-lg'>
                                        <form action="">
                                             <div className=" py-3  w-full ">
                                                  <label className=' text-base  md:text-lg  font-medium' htmlFor="">Email address *</label>
                                                  <input className=' my-2 p-2 border  shadow focus:outline-[#F84C03] border-[#2B2B2B] block w-full rounded-md' type="email" placeholder='Ex: example@gmail.com' name="" id="" />
                                             </div>
                                             <div className=" py-3  w-full ">
                                                  <label className=' text-base  md:text-lg  font-medium' htmlFor="">Password * </label>
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
                                             <div onClick={handleGoogle} className=' w-full flex justify-center
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
                                        <p className=' text-base  md:text-xl font-medium  textColor'>Don not have an account? </p>
                                        <Link className=' text-base  md:text-xl font-medium   text-blue-500 ' href={'/register'}>Sign Up</Link>

                                   </div>
                              </div>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default Login;

'use client'
import Image from "next/image";
import Link from "next/link";
import Container from "../Container/Container";
import { usePathname } from "next/navigation";
import { FaBars } from 'react-icons/fa'
import logo from '../../assets/logo.svg'
import { useState } from "react";
import MenuBar from "./MenuBar";
import Button from "../Button/Button";
const Navbar = () => {
     const pathName = usePathname();

     const [Open, setOpen] = useState(true);
     return (
          <div>
               <div>
                    <nav className={`px-2 py-3 z-50  shadow fixed top-0 left-0 w-full transition-transform`}>
                         <Container>
                              <div className=' '>
                                   <div className='flex justify-between items-center'>
                                        <div className=' logo flex  items-center gap-4'>

                                             <Link href="/">   <h1>  <span>INDEX</span>LOST</h1> </Link>
                                        </div>

                                        <div className=' hidden lg:flex items-center gap-3  space-x-5'>
                                             <Link className={`px-2 rounded-lg ${pathName == "/" ? "activeLink" : ""} hover:bg-[#0EE6B8] hover:text-black font-medium transition-all`} href={'/'}>Home</Link>
                                             <Link className={`px-2 rounded-lg ${pathName == "/teacher" ? "activeLink" : ""} hover:bg-[#0EE6B8] hover:text-black font-medium transition-all`} href={'/teacher'}>Teacher</Link>
                                             <Link className={`px-2 rounded-lg ${pathName == "/courses" ? "activeLink" : ""} hover:bg-[#0EE6B8] hover:text-black font-medium transition-all`} href={'/courses'}> All Courses</Link>
                                             <Link className={`px-2 rounded-lg ${pathName == "/blogs" ? "activeLink" : ""} hover:bg-[#0EE6B8] hover:text-black font-medium transition-all`} href={'/blogs'}>Blogs</Link>
                                             <Link className={`px-2 rounded-lg ${pathName == "/about" ? "activeLink" : ""} hover:bg-[#0EE6B8] hover:text-black font-medium transition-all`} href={'/about'}>About</Link>
                                             <Link className={`px-2 rounded-lg ${pathName == "/contact" ? "activeLink" : ""} hover:bg-[#0EE6B8] hover:text-black font-medium transition-all`} href={'/contact'}>Contact Us</Link>

                                        </div>

                                        <div className=" hidden lg:block">

                                             <div className="flex gap-2 items-center">
                                                  <Link href={'/login'}> <Button text={"login/register"}></Button></Link>
                                             </div>

                                        </div>

                                        <div onClick={() => setOpen(!Open)} className=' lg:hidden '>
                                             {
                                                  Open ? <FaBars size={24} className=' '> </FaBars>
                                                       :
                                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                       </svg>

                                             }

                                        </div>
                                   </div>
                                   {/* navigation links  for mobile screen */}

                                   <div className='lg:hidden pt-7'>
                                        {
                                             Open ? "" : <MenuBar setOpen={setOpen}></MenuBar>
                                        }
                                   </div>

                              </div>
                         </Container>

                    </nav>
               </div>
          </div>
     );
};

export default Navbar;
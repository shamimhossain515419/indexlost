
'use client'
import Image from "next/image";
import Link from "next/link";
import Container from "../Container/Container";
import { usePathname } from "next/navigation";
import { FaBars } from 'react-icons/fa'
import logo from '../../assets/logo.svg'
import { useContext, useState } from "react";
import MenuBar from "./MenuBar";
import Button from "../Button/Button";
import { AuthContact } from "@/Controlar/GlobalState/GlobalState";
const Navbar = () => {
     const pathName = usePathname();
     const { user, showModal, setShowModal } = useContext(AuthContact);
     console.log(user);
     const [Open, setOpen] = useState(true);
     return (
          <div>
               <div>
                    <nav className={`px-2 py-3 z-50  background    shadow fixed top-0 left-0 w-full transition-transform`}>
                         <Container>
                              <div className=' w-full  overflow-hidden '>
                                   <div className='flex justify-between items-center '>
                                        <div className=' logo flex  items-center gap-4'>

                                             <Link href="/">   <h1>  <span>INDEX</span>LOST</h1> </Link>
                                        </div>

                                        <div className="flex  justify-between gap-5">

                                             <div className=' hidden lg:flex items-center gap-3  space-x-5'>
                                                  <Link className={`px-2 rounded-lg ${pathName == "/" ? "activeLink" : ""}    hover:text-[#4F46E5] font-medium transition-all`} href={'/'}>Home</Link>
                                                  <Link className={`px-2 rounded-lg ${pathName == "/lost-product" ? "activeLink" : ""}    hover:text-[#4F46E5] font-medium transition-all`} href={'/lost-product'}>lost product</Link>
                                                  <Link className={`px-2 rounded-lg ${pathName == "/win-product" ? "activeLink" : ""}    hover:text-[#4F46E5] font-medium transition-all`} href={'/win-product'}> Win Product</Link>
                                                  <Link className={`px-2 rounded-lg ${pathName == "/blog" ? "activeLink" : ""}    hover:text-[#4F46E5] font-medium transition-all`} href={'/blog'}>Blogs</Link>
                                                  <Link className={`px-2 rounded-lg ${pathName == "/about" ? "activeLink" : ""}    hover:text-[#4F46E5] font-medium transition-all`} href={'/about'}> About</Link>
                                                  <Link className={`px-2 rounded-lg ${pathName == "/contact" ? "activeLink" : ""}    hover:text-[#4F46E5] font-medium transition-all`} href={'/contact'}>Contact Us</Link>

                                             </div>

                                             <div className=" hidden lg:block">

                                                  <div className="flex gap-2 items-center">
                                                       {
                                                            user ? <div>
                                                                 <div onClick={()=>setShowModal(!showModal)} className=" cursor-pointer ">
                                                                      <Image className="  border-2 border-[#4F46E5] w-[50px] h-[50px] rounded-full" width={50} height={50} src={user?.photoURL} alt="image"></Image>
                                                                 </div>
                                                            </div> : <Link href={'/login'}> <Button paddingY={"py-[20px]"} paddingX={"px-[20px]"} text={"login/register"}></Button></Link>
                                                       }
                                                  </div>

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

                                   {
                                         showModal ? <div className=" max-w-[300px] absolute top-16 right-16 bg-white p-4 rounded-xl bg-[4F46E5] ">
                                         <div>
                                              <h1 className=" text-base md:text-xl font-medium my-2"> {user?.displayName} </h1>
                                              <p  className=" capitalize">  {user?.uid?.slice(0,10)} </p>
                                          </div>
                                   </div> : null
                                   }

                                    

                              </div>
                              
                         </Container>

                    </nav>
               </div>
          </div>
     );
};

export default Navbar;
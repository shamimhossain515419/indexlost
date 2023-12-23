
'use client'
import Image from "next/image";
import Link from "next/link";
import Container from "../Container/Container";
import { usePathname, useRouter } from "next/navigation";
import { FaBars } from 'react-icons/fa'
import { useContext, useState } from "react";
import MenuBar from "./MenuBar";
import Button from "../Button/Button";
import { AuthContact } from "@/Controlar/GlobalState/GlobalState";
import SecondButton from "../Button/SecondButton";
import { IoIosLogOut } from "react-icons/io";
import Swal from "sweetalert2";


const Navbar = () => {
     const pathName = usePathname();
     const { user, showModal, Sing_out, setShowModal } = useContext(AuthContact);
     console.log(user);
     const [Open, setOpen] = useState(true);
     const router=useRouter();
      const photoUser=user?.photoURL;

     const handleLogout = async () => {
          const result =  Sing_out();
          console.log(result);
          if (result) {
               setShowModal(false)
               Swal.fire(" Logout Successfully ");
               router.push('/')
          }
     }
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
                                                            user?.email ? <div>
                                                                 <div onClick={() => setShowModal(!showModal)} className=" cursor-pointer ">
                                                                      <Image className="  border-2 border-[#4F46E5] w-[50px] h-[50px] rounded-full" width={50} height={50} src={user?.photoURL ? user?.photoURL : "https://i.ibb.co/9Z1FMbj/istockphoto-1495088043-612x612.jpg"} alt="image"></Image>
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
                                        showModal ? <div className="  modalBg  border-2 border-[#4F46E5] max-w-[350px]  md:w-[350px] absolute top-20 right-16 bg-white p-4 rounded-xl bg-[4F46E5] ">
                                             <div>

                                                  <div className="  text-center">
                                                       <div className=" text-center mx-auto">
                                                            <Image className=" block mx-auto border-2 border-[#4F46E5]   w-[80px] h-[80px] rounded-full object-cover" width={80} height={80} src={user?.photoURL ? user?.photoURL : "https://i.ibb.co/9Z1FMbj/istockphoto-1495088043-612x612.jpg"} alt="image"></Image>
                                                       </div>
                                                       <h1 className=" gradientText text-lg md:text-2xl font-bold my-1"> {user?.displayName} </h1>
                                                       <p className=" text-lg  font-medium capitalize ">ID:  {user?.uid?.slice(0, 10)} </p>
                                                       <Link href={'/'} className=" py-2    inline-block mx-auto">
                                                            <Button bg={"bg-[#4F46E5]"} paddingX={"px-[15px]"} paddingY={"py-[10px]"} text={"View profile"}></Button>
                                                       </Link>


                                                  </div>

                                                  <div className="   flex  flex-col gap-2  ">
                                                       <Link className="  hover:text-[#4F46E5] duration-200 capitalize text-base sm:text-lg font-medium " href={'/'}> Dashboard </Link>

                                                       <div>
                                                            <hr className=" h-[2px] w-full   primaryBg " />
                                                       </div>
                                                       <Link className="  hover:text-[#4F46E5] duration-200 capitalize text-base sm:text-lg font-medium " href={'/'}> Lost Product </Link>
                                                       <div>
                                                            <hr className=" h-[2px] w-full   primaryBg " />
                                                       </div>

                                                       <Link className="  hover:text-[#4F46E5] duration-200 capitalize text-base sm:text-lg font-medium " href={'/'}> Win Product </Link>
                                                       <hr className=" h-[2px] w-full   primaryBg " />
                                                  </div>
                                                  <div onClick={handleLogout} className="  cursor-pointer text-[#4F46E5] py-2 flex justify-start items-center gap-2">
                                                       <IoIosLogOut size={22} />
                                                       <small className=" text-lg font-medium ">Logout</small>
                                                  </div>

                                                  <div>

                                                  </div>

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
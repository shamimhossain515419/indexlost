
'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const MenuBar = ({ user }) => {
     const pathName = usePathname()
     return (
          <div>
               <div>
                    <div>

                         <div className=' space-y-3 flex flex-col '>

                              <Link href={'/'} className={`${pathName == "/" ? "activeLink" : ""}`}> Home</Link>

                              <Link href={'/teacher'} className={`${pathName == "/teacher" ? "activeLink" : ""}`}>Teacher </Link>
                              <Link href={'/leader-board'} className={`${pathName == "/leader-board" ? "activeLink" : ""}`}> Leader board</Link>
                              <Link href={'/courses'} className={`${pathName == "/courses" ? "activeLink" : ""}`}> All Courses</Link>
                              <Link href={'/blogs'} className={`${pathName == "/blogs" ? "activeLink" : ""}`}> Blogs</Link>
                              <Link href={'/about'} className={`${pathName == "/about" ? "activeLink" : ""}`}> About</Link>
                              <Link href={'/contact'} className={`${pathName == "/contact" ? "activeLink" : ""}`}> Contact Us</Link>



                         </div>
                    </div>
               </div>
          </div>
     );
};

export default MenuBar;
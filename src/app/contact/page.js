import Container from '@/Components/Container/Container';
import Hero from '@/Components/Hero/Hero';
import React from 'react';
import Image from 'next/image';
import image from '../../assets/blogs/Rectangle 17835.png'
import { MdWifiCalling1 } from 'react-icons/md';
import { TiLocation } from 'react-icons/ti';
import { CiMail } from 'react-icons/ci';
import Button from '@/Components/Button/Button';
import './contact.css'
const ContactPage = () => {
     return (
          <div>
               <Hero title={"Contact Us"} name={'Our Help Center'} Paragraph={"Our team of experts who have been in the profession for years focuses on helping you achieve optimal technical surface."}> </Hero>



               <Container>

                    <div>
                         <div className="">


                              <div className=" Our_Help_Center  grid md:grid-cols-3 py-10">

                                   <div className="    p-3">
                                        <div className="hele_Card">
                                             <div className=" icon">
                                                  <MdWifiCalling1 className=' primaryColor' size={24} />
                                             </div>
                                             <div>
                                                  <h1> Call Us Today</h1>
                                                  <div>
                                                       <p>+4 (248) 762-0356</p>
                                                       <p>+1 (717) 550-1675</p>
                                                  </div>
                                             </div>

                                        </div>
                                   </div>
                                   <div className="  p-3">
                                        <div className="hele_Card">
                                             <div className=" icon">
                                             <CiMail className=' primaryColor' size={24} />
                                             </div>
                                             <div>
                                                  <h1> Send Message Via Email</h1>
                                                  <div>
                                                       <p>support@techpro.com</p>
                                                       <p>info.techpro@gmail.com</p>
                                                  </div>
                                             </div>

                                        </div>
                                   </div>
                                   <div className="   p-3">
                                        <div className="hele_Card">
                                             <div className=" icon">
                                             <TiLocation className=' primaryColor' size={24} />
                                             </div>
                                             <div>
                                                  <h1> Visit Our Office</h1>
                                                  <div>

                                                       <p>3448 Ile De France St #242, Fort Wainwright,</p>
                                                       <p> Alaska 99703, USA</p>
                                                  </div>
                                             </div>

                                        </div>
                                   </div>


                              </div>
                         </div>

                         <div className="   py-3 ">
                              <div className=" ">
                                   <div className=" apartment_form grid   md:grid-cols-2 gap-11 ">
                                        <div className="  w-100  p-5">
                                             <h1 className=" HadingTitle"> Love to hear from you, leave a message</h1>
                                             <div className="py-5">
                                                  <Image className=" img-fluid" src={image} alt="" />
                                             </div>

                                        </div>
                                        <div className=" inputFrom shadow w-100  px-5 py-3">

                                             <form action="">

                                                  <div className=" flex items-center gap-3 ">
                                                       <div className=' w-full'>
                                                            <label for="">Last name <span>*</span></label>
                                                            <input className=' w-full' type="text" name="" placeholder="Enter last name" id="" />
                                                       </div>
                                                       <div className=' w-full'>
                                                            <label for="">Last name <span>*</span></label>
                                                            <input className=' w-full' type="text" name="" placeholder="Enter last namee" id="" />
                                                       </div>
                                                  </div>
                                                  <div className=' w-full'>
                                                       <label for="">Email <span>*</span></label>
                                                       <input className=' w-full' type="text" name="" placeholder="Enter email address" id="" />
                                                  </div>
                                                  <div className=' w-full'>
                                                       <label for="">Message <span>*</span></label>
                                                       <textarea className=' w-full' name="" placeholder="Type here" id="" cols="30" rows="5"></textarea>
                                                  </div>
                                                  <div className=" flex justify-end  w-full ">
                                                        <div className=' cursor-pointer'>
                                                        <Button  text={"Send message"} paddingX={"px-[30px]"}  paddingY={"py-[15px]"}  ></Button>
                                                        </div>
                                                  </div>
                                             </form>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </Container>


          </div>
     );
};

export default ContactPage;
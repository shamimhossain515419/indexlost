"use client"
import React, { useState } from 'react';
import './Home.css'
import Container from '@/Components/Container/Container';
import Image from 'next/image';
import bannerImage from '../../../assets/Home/banner-pic.png'
import Button from '@/Components/Button/Button';
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowLeft, FaArrowRight, FaCheck, FaStar } from 'react-icons/fa';
import SectionTitle from '@/Components/SectionTitle/SectionTitle';
import Link from 'next/link';
import plat_form from '../../../assets/Home/plat-form.png';
import testimonials from '../../../assets/Home/testo.png';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SecondButton from '@/Components/Button/SecondButton';
import FindByLocation from '@/Components/FindByLocation/FindByLocation';
import BlogSection from '@/Components/BlogSection/BlogSection';

const HomePage = () => {
     const swiperRef = useRef(null);
     const [currentData, setCurrentData] = useState(0)
     const [activeIndex, setActiveIndex] = useState(0);
     const goNext = () => {
          if (swiperRef.current) {
               swiperRef.current.swiper.slideNext();
          }
     };
     const goPrev = () => {
          if (swiperRef.current) {
               swiperRef.current.swiper.slidePrev();
          }
     };
     const handleSlideChange = () => {
          if (swiperRef.current) {
               setActiveIndex(swiperRef.current.swiper.realIndex);
          }
     };
     return (
          <div>

               <div className='banner '>
                    <Container>
                         <div className=' grid md:grid-cols-2 gap-3 items-center justify-between   py-5'>
                              <div>
                                   <div>
                                        <div className=' flex items-center gap-2'>
                                             <div className=' p-2 rounded text-white primaryBg inline-block'>
                                                  <FaCheck size={24} />
                                             </div>
                                             <h2 className=' text-xl md:text-3xl font-bold  primaryColor'>  Stay connected with indexLost  to find  lost products</h2>
                                        </div>
                                        <h1 className=' pt-7 text-[#555]  rounded-[20px] text-[48px]  font-bold   leading-[50px]'> Find Your Perfect <br /> Lost  Product</h1>
                                   </div>

                                   <div className=' md:w-9/12 my-8 sm:flex  items-center justify-between  gap-3 bannerText'>
                                        <div className=' w-full m-2  md:m-0 '>
                                             <select className="fruitSelect" name="fruit">
                                                  <option value="apple">Apple</option>
                                                  <option value="orange">Orange</option>
                                                  <option value="banana">Banana</option>
                                                  <option value="grape">Grape</option>
                                                  <option value="watermelon">Watermelon</option>
                                             </select>
                                        </div>
                                        <div className=' hidden md:block  bar'></div>
                                        <div className=' w-full m-2  md:m-0 '>
                                             <input className=' w-full ' type="text" placeholder='Search ' name="" id="" />
                                        </div>
                                        <div className='SearchButton w-full text-center m-2  md:m-0'>
                                             <button   >Search new</button>
                                        </div>
                                   </div>

                                   <div className=' Home_counter pt-5'>
                                        <div>
                                             <ul className=' counter_up  sm:flex  align-center  justify-start gap-[45px] '>
                                                  <li>
                                                       <span>9,207</span>
                                                       <p>Freelance developers</p>
                                                  </li>
                                                  <li>
                                                       <span>6000+</span>
                                                       <p>Projects Added</p>
                                                  </li>
                                                  <li>
                                                       <span>919,207</span>
                                                       <p>Completed projects</p>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>

                              </div>
                              <div>
                                   <div className=' bannerImage'>
                                        <div className=' text-center  mx-auto'>
                                             <Image className=' text-center  img-fluid  ' src={bannerImage} alt='image'></Image>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </Container>
               </div>


               <Container>
                    <div className=' py-14'>
                         <div className=' text-center'>
                              <SectionTitle title_1={"Featured"} title_2={"Projects "} title_3={"for you"} paragraph={"We have over 2000+ Projects waiting for you"}></SectionTitle>
                         </div>

                         <div className=' grid  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3  2xl:grid-cols-4    sm:gap-1  xl:gap-2  py-3'>

                              <Link href={'/'} className='Available flex m-3 sm-m-0 justify-between gap-4  items-center'>
                                   <div>
                                        <h1 className=''>Website design</h1>
                                        <p className=' '>400 Lost product Available</p>
                                   </div>
                                   <div className='icons'>
                                        <IoIosArrowForward size={28} />
                                   </div>
                              </Link>
                              <Link href={'/'} className='Available flex m-3 sm-m-0 justify-between gap-4  items-center'>
                                   <div>
                                        <h1 className=''>Website design</h1>
                                        <p>400 Lost product Available</p>
                                   </div>
                                   <div className='icons'>
                                        <IoIosArrowForward size={28} />
                                   </div>
                              </Link>

                              <Link href={'/'} className='Available flex m-3 sm-m-0 justify-between gap-4  items-center'>
                                   <div>
                                        <h1 className=''>Website design</h1>
                                        <p>400 Lost product Available</p>
                                   </div>
                                   <div className='icons'>
                                        <IoIosArrowForward size={28} />
                                   </div>
                              </Link>
                              <Link href={'/'} className='Available flex m-3 sm-m-0 justify-between gap-4  items-center'>
                                   <div>
                                        <h1 className=''>Website design</h1>
                                        <p>400 Lost product Available</p>
                                   </div>
                                   <div className='icons'>
                                        <IoIosArrowForward size={28} />
                                   </div>
                              </Link>

                              <Link href={'/'} className='Available flex m-3 sm-m-0 justify-between gap-4  items-center'>
                                   <div>
                                        <h1 className=''>Website design</h1>
                                        <p>400 Lost product Available</p>
                                   </div>
                                   <div className='icons'>
                                        <IoIosArrowForward size={28} />
                                   </div>
                              </Link>
                              <Link href={'/'} className='Available flex m-3 sm-m-0 justify-between gap-4  items-center'>
                                   <div>
                                        <h1 className=''>Website design</h1>
                                        <p>400 Lost product Available</p>
                                   </div>
                                   <div className='icons'>
                                        <IoIosArrowForward size={28} />
                                   </div>
                              </Link>
                              <Link href={'/'} className='Available flex m-3 sm-m-0 justify-between gap-4  items-center'>
                                   <div>
                                        <h1 className=''>Website design</h1>
                                        <p>400 Lost product Available</p>
                                   </div>
                                   <div className='icons'>
                                        <IoIosArrowForward size={28} />
                                   </div>
                              </Link>
                              <Link href={'/'} className='Available flex m-3 sm-m-0 justify-between gap-4  items-center'>
                                   <div>
                                        <h1 className=''>Website design</h1>
                                        <p>400 Lost product Available</p>
                                   </div>
                                   <div className='icons'>
                                        <IoIosArrowForward size={28} />
                                   </div>
                              </Link>
                              <Link href={'/'} className='Available flex m-3 sm-m-0 justify-between gap-4  items-center'>
                                   <div>
                                        <h1 className=''>Website design</h1>
                                        <p>400 Lost product Available</p>
                                   </div>
                                   <div className='icons'>
                                        <IoIosArrowForward size={28} />
                                   </div>
                              </Link>
                              <Link href={'/'} className='Available flex m-3 sm-m-0 justify-between gap-4  items-center'>
                                   <div>
                                        <h1 className=''>Website design</h1>
                                        <p>400 Lost product Available</p>
                                   </div>
                                   <div className='icons'>
                                        <IoIosArrowForward size={28} />
                                   </div>
                              </Link>

                         </div>
                    </div>

               </Container >
               {/* Project Around   */}

               <div className=' ProjectAround py-7   w-full'>
                    <Container>

                         <div className=' grid xl:grid-cols-2 items-center   gap-10   w-full'>
                              <div className=' mr-5 xl:mr-0'>
                                   <SectionTitle title_1={"Discover"} title_2={"Project Around "} title_3={"your Location in Our Platform"} paragraph={"Get Inspired by Development Projects"} ></SectionTitle>

                                   <div>
                                        <p className=' paragraph'>We Provide Stable Service With Experts Freelancers around the globe, are looking for work and provide the best they have .Experience state-of-the-art marketplace platform with the Kofejob. We combine the experience of our global community around the globe for a best marketplace theme.</p>

                                        <div className='  py-4'>

                                             <div className=' flex gap-5 items-center '>
                                                  <Button hover={" hover:bg-[#1D9BF0] "} paddingY={"py-[10px]"} paddingX={"px-[40px]"} text={"View Post"}> </Button>
                                                  <SecondButton hover={" hover:bg-[#4F46E5] "} paddingY={"py-[10px]"} paddingX={"px-[40px]"} text={"Create Post"}> </SecondButton>

                                             </div>
                                        </div>
                                   </div>



                              </div>
                              <div className=' ml-5 xl:ml-0'>
                                   <Image className='  w-full' src={plat_form} alt='image'></Image>
                              </div>
                         </div>
                    </Container>
               </div>



               <FindByLocation></FindByLocation>

               <div className='bg-[#FFF5F1] py-12  '>
                    <Container>

                         <div className='my-3 sm:flex justify-between gap-3   items-end'>

                              <SectionTitle title_1={"Reviews of the"} title_2={"Users"} paragraph={"What our Clients say about us"}> </SectionTitle>

                              <div>
                                   <div className="arrow">
                                        <div onClick={goPrev}>
                                             <FaArrowLeft size={18} />
                                        </div>
                                        <div onClick={goNext}>
                                             <FaArrowRight size={18} />

                                        </div>
                                   </div>
                              </div>

                         </div>






                         <div className=' my-4'>
                              <Swiper
                                   ref={swiperRef}
                                   loop={true}
                                   speed={1000}
                                   autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                   }}

                                   modules={[Autoplay, Pagination, Navigation]}
                                   breakpoints={{
                                        100: {
                                             slidesPerView: 1,
                                             spaceBetween: 15,
                                        },
                                        768: {
                                             slidesPerView: 2,
                                             spaceBetween: 15,
                                        },
                                        1024: {
                                             slidesPerView: 2,
                                             spaceBetween: 10,
                                        },
                                        1200: {
                                             slidesPerView: 3,

                                             spaceBetween: 20,
                                        },
                                   }} onSlideChange={handleSlideChange}

                                   className="custom-grid"
                              >
                                   <SwiperSlide >
                                        <div className="testimonials_card ">
                                             <div className=" p-2">
                                                  <div className=" py-3 flex gap-2 text-[#FCB300] items-center">
                                                       <FaStar size={20} />
                                                       <FaStar size={20} />
                                                       <FaStar size={20} />
                                                       <FaStar size={20} />
                                                       <FaStar size={20} />
                                                  </div>
                                                  <div>
                                                       <p>Lorem ipsum dolor sit amet consectetur. Libero lorem eget vitae sapien sed
                                                            et. Pharetra
                                                            diam adipiscing aliquet commodo rhon pellent esque sollicitudin purus.
                                                            Lectus amet
                                                            erat aliquet ad ipiscing.</p>
                                                  </div>
                                                  <div className=" testimonials_Image   pt-3   ">
                                                       <Image className="img" src={testimonials} alt="" />
                                                       <div>
                                                            <h1>CEO at Google</h1>
                                                            <p>Doe Williamson</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </SwiperSlide>
                                   <SwiperSlide >
                                        <div className="testimonials_card ">
                                             <div className=" p-2">
                                                  <div className=" py-3 flex gap-2 text-[#FCB300] items-center">
                                                       <FaStar size={20} />
                                                       <FaStar size={20} />
                                                       <FaStar size={20} />
                                                       <FaStar size={20} />
                                                       <FaStar size={20} />
                                                  </div>
                                                  <div>
                                                       <p>Lorem ipsum dolor sit amet consectetur. Libero lorem eget vitae sapien sed
                                                            et. Pharetra
                                                            diam adipiscing aliquet commodo rhon pellent esque sollicitudin purus.
                                                            Lectus amet
                                                            erat aliquet ad ipiscing.</p>
                                                  </div>
                                                  <div className=" testimonials_Image   pt-3   ">
                                                       <Image className="img" src={testimonials} alt="" />
                                                       <div>
                                                            <h1>CEO at Google</h1>
                                                            <p>Doe Williamson</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </SwiperSlide>
                                   <SwiperSlide >
                                        <div className="testimonials_card ">
                                             <div className=" p-2">
                                                  <div className=" py-3 flex gap-2 text-[#FCB300] items-center">
                                                       <FaStar size={20} />
                                                       <FaStar size={20} />
                                                       <FaStar size={20} />
                                                       <FaStar size={20} />
                                                       <FaStar size={20} />
                                                  </div>
                                                  <div>
                                                       <p>Lorem ipsum dolor sit amet consectetur. Libero lorem eget vitae sapien sed
                                                            et. Pharetra
                                                            diam adipiscing aliquet commodo rhon pellent esque sollicitudin purus.
                                                            Lectus amet
                                                            erat aliquet ad ipiscing.</p>
                                                  </div>
                                                  <div className=" testimonials_Image   pt-3   ">
                                                       <Image className="img" src={testimonials} alt="" />
                                                       <div>
                                                            <h1>CEO at Google</h1>
                                                            <p>Doe Williamson</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </SwiperSlide>
                                   <SwiperSlide >
                                        <div className="testimonials_card ">
                                             <div className=" p-2">
                                                  <div className=" py-3 flex gap-2 text-[#FCB300] items-center">
                                                       <FaStar size={20} />
                                                       <FaStar size={20} />
                                                       <FaStar size={20} />
                                                       <FaStar size={20} />
                                                       <FaStar size={20} />
                                                  </div>
                                                  <div>
                                                       <p>Lorem ipsum dolor sit amet consectetur. Libero lorem eget vitae sapien sed
                                                            et. Pharetra
                                                            diam adipiscing aliquet commodo rhon pellent esque sollicitudin purus.
                                                            Lectus amet
                                                            erat aliquet ad ipiscing.</p>
                                                  </div>
                                                  <div className=" testimonials_Image   pt-3   ">
                                                       <Image className="img" src={testimonials} alt="" />
                                                       <div>
                                                            <h1>CEO at Google</h1>
                                                            <p>Doe Williamson</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </SwiperSlide>

                              </Swiper>
                         </div>
                    </Container>
               </div>


               <BlogSection></BlogSection>

               {/* home sing section */}



               <div className='primaryBg py-20 text-white'>
                    <Container>
                         <div className=' sm:flex  justify-between items-center gap-1'>
                              <div className=' pt-3 sm:pt-0'>
                                   <h1 className=' text-white text-base   sm:text-2xl py-1  md:text-4xl    font-extrabold '>Find Your Next Great Lost Product!</h1>
                                   <p className=' text-lg md:text-xl  font-normal text-white '>Quisque pretium dolor turpis, quis blandit turpis semper ut. Nam malesuada eros nec luctus laoreet.</p>
                              </div>
                              <Link   href={'/login'} className=' pt-3 sm:pt-0'>
                                   <SecondButton text={"sing in"} hover={" bg-[#F84C03] "} paddingY={"py-[10px]"} paddingX={"px-[50px]"}></SecondButton>
                              </Link>
                         </div>

                    </Container>
               </div>


          </div >
     );
};

export default HomePage;
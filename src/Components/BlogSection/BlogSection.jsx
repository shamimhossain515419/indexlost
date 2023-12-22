import React from 'react';
import Container from '../Container/Container';
import Image from 'next/image';
import blog1 from '../../assets/Home/blog-12.jpg'
import blog2 from '../../assets/Home/photo-1545239351-ef35f43d514b.avif'
import blog3 from '../../assets/Home/blog3.jpg'
import blog4 from '../../assets/Home/istockphoto-1560634787-170667a.webp'
import './BlogSection.css'
import { FaCalendar, FaTimes, FaUser } from 'react-icons/fa';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionTitle from '../SectionTitle/SectionTitle';
const BlogSection = () => {
     return (
          <div className=' py-16'>
               <Container>

                    <div className=' py-2'>

                         <SectionTitle alignment={"text-center"} title_1={"Featured "} title_2={"Blogs"} paragraph={"Read Our Article To Get Tricks"}></SectionTitle>
                    </div>

                    <div className=' my-2'>
                    <Swiper

                         loop={true}
                         speed={1000}
                         autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                         }}
                         pagination={true}
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
                         }}

                         className="custom-grid"
                    >

                         <SwiperSlide >
                              <div className="blogsCard">
                                   <div className="image_container ">
                                        <Image className="image" src={blog1} alt="" />
                                   </div>
                                   <div>
                                        <div className="flex  justify-between    items-center   gap-2">
                                             <div className=" flex   items-center    gap-3">
                                                  <div>
                                                       <FaUser className=' primaryColor' size={18}></FaUser>
                                                  </div>
                                                  <div> By Johnson</div>
                                             </div>
                                             <div className=" flex   items-center    gap-3">
                                                  <div className=" flex   items-center    gap-3">
                                                       <div>
                                                            <FaCalendar className=' primaryColor' size={18}></FaCalendar>
                                                       </div>
                                                       <div>
                                                            23 Sep, 2023
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div>
                                             <h1 className="my-2"> The Significance of User-Centered Design</h1>
                                             <p className=" paragraph ">Lorem ipsum dolor sit amet consectetur. Vitae eget feugiat nulla egestas.
                                                  Proin auctor egestas habitasse a sem vel dapibus nulla.</p>
                                        </div>

                                   </div>


                              </div>
                         </SwiperSlide>
                         <SwiperSlide >
                              <div className="blogsCard">
                                   <div className="image_container ">
                                        <Image className="image" src={blog2} alt="" />
                                   </div>
                                   <div>
                                        <div className="flex  justify-between    items-center   gap-2">
                                             <div className=" flex   items-center    gap-3">
                                                  <div>
                                                       <FaUser className=' primaryColor' size={18}></FaUser>
                                                  </div>
                                                  <div> By Johnson</div>
                                             </div>
                                             <div className=" flex   items-center    gap-3">
                                                  <div className=" flex   items-center    gap-3">
                                                       <div>
                                                            <FaCalendar className=' primaryColor' size={18}></FaCalendar>
                                                       </div>
                                                       <div>
                                                            23 Sep, 2023
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div>
                                             <h1 className="my-2"> The Significance of User-Centered Design</h1>
                                             <p className=" paragraph ">Lorem ipsum dolor sit amet consectetur. Vitae eget feugiat nulla egestas.
                                                  Proin auctor egestas habitasse a sem vel dapibus nulla.</p>
                                        </div>

                                   </div>


                              </div>
                         </SwiperSlide>
                         <SwiperSlide >
                              <div className="blogsCard">
                                   <div className="image_container ">
                                        <Image className="image" src={blog3} alt="" />
                                   </div>
                                   <div>
                                        <div className="flex  justify-between    items-center   gap-2">
                                             <div className=" flex   items-center    gap-3">
                                                  <div>
                                                       <FaUser className=' primaryColor' size={18}></FaUser>
                                                  </div>
                                                  <div> By Johnson</div>
                                             </div>
                                             <div className=" flex   items-center    gap-3">
                                                  <div className=" flex   items-center    gap-3">
                                                       <div>
                                                            <FaCalendar className=' primaryColor' size={18}></FaCalendar>
                                                       </div>
                                                       <div>
                                                            23 Sep, 2023
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div>
                                             <h1 className="my-2"> The Significance of User-Centered Design</h1>
                                             <p className=" paragraph ">Lorem ipsum dolor sit amet consectetur. Vitae eget feugiat nulla egestas.
                                                  Proin auctor egestas habitasse a sem vel dapibus nulla.</p>
                                        </div>

                                   </div>


                              </div>
                         </SwiperSlide>
                         <SwiperSlide >
                              <div className="blogsCard">
                                   <div className="image_container ">
                                        <Image className="image" src={blog4} alt="" />
                                   </div>
                                   <div>
                                        <div className="flex  justify-between    items-center   gap-2">
                                             <div className=" flex   items-center    gap-3">
                                                  <div>
                                                       <FaUser className=' primaryColor' size={18}></FaUser>
                                                  </div>
                                                  <div> By Johnson</div>
                                             </div>
                                             <div className=" flex   items-center    gap-3">
                                                  <div className=" flex   items-center    gap-3">
                                                       <div>
                                                            <FaCalendar className=' primaryColor' size={18}></FaCalendar>
                                                       </div>
                                                       <div>
                                                            23 Sep, 2023
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div>
                                             <h1 className="my-2"> The Significance of User-Centered Design</h1>
                                             <p className=" paragraph ">Lorem ipsum dolor sit amet consectetur. Vitae eget feugiat nulla egestas.
                                                  Proin auctor egestas habitasse a sem vel dapibus nulla.</p>
                                        </div>

                                   </div>


                              </div>
                         </SwiperSlide>

                    </Swiper>
                    </div>
               </Container>
          </div>
     );
};

export default BlogSection;
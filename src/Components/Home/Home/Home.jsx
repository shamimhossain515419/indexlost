import React from 'react';
import './Home.css'
import Container from '@/Components/Container/Container';
import Image from 'next/image';
import bannerImage from '../../../assets/Home/banner-pic.png'
import Button from '@/Components/Button/Button';
import { FaCheck } from 'react-icons/fa';
import SectionTitle from '@/Components/SectionTitle/SectionTitle';
const HomePage = () => {
     return (
          <div>

               <div className='banner '>
                    <Container>
                         <div className=' grid md:grid-cols-2 gap-3 items-center justify-between   py-5'>
                              <div>
                                   <div>
                                        <div className=' flex items-center gap-2'>
                                             <div className=' p-2 rounded text-white bg-[#2B2B2B] inline-block'>
                                                  <FaCheck size={24} />
                                             </div>
                                             <h2 className=' text-xl md:text-3xl font-bold  primaryColor'>  Stay connected with indexLost  to find  lost products</h2>
                                        </div>
                                        <h1 className=' pt-7 text-[#555]  rounded-[20px] text-[48px]  font-bold   leading-[50px]'> Find Your Perfect <br /> Lost  Product</h1>
                                   </div>

                                   <div className=' md:w-9/12 my-8 sm:flex  items-center justify-between  gap-3 bannerText'>
                                        <div className=' w-full '>
                                             <select className="fruitSelect" name="fruit">
                                                  <option value="apple">Apple</option>
                                                  <option value="orange">Orange</option>
                                                  <option value="banana">Banana</option>
                                                  <option value="grape">Grape</option>
                                                  <option value="watermelon">Watermelon</option>
                                             </select>
                                        </div>
                                        <div className='bar'></div>
                                        <div className=' w-full '>
                                             <input className=' w-full ' type="text" placeholder='Search ' name="" id="" />
                                        </div>
                                        <div className='SearchButton w-full text-center'>
                                             <button   >Search new</button>
                                        </div>
                                   </div>

                                   <div className=' Home_counter pt-5'>
                                        <div>
                                             <ul className=' counter_up  flex  align-center  justify-start gap-[45px] '>
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
                                             <Image className=' text-center  ' src={bannerImage} alt='image'></Image>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </Container>
               </div>


               <Container>
                    <div>
                         <div  className=' text-center'>
                              <SectionTitle title_1={"Featured"} title_2={"Projects "} title_3={"for you"} paragraph={"We have over 2000+ Projects waiting for you"}></SectionTitle>
                         </div>
                    </div>

               </Container>



          </div>
     );
};

export default HomePage;
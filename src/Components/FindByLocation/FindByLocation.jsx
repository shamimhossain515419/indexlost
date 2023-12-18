import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Container from '../Container/Container';
import Button from '../Button/Button';
import Image from 'next/image';
import image1 from '../../assets/Home/location-01.jpg';
import image2 from '../../assets/Home/location-03.jpg';
import image3 from '../../assets/Home/location-02.jpg';
import image4 from '../../assets/Home/location-05.jpg';
import image5 from '../../assets/Home/location-06.jpg';
import image6 from '../../assets/Home/location-04.jpg';
import image7 from '../../assets/Home/location-04.jpg';
import './index.css'

const FindByLocation = () => {
     return (
          <div className='  py-16'>



               <Container>
                    <div className=' sm:flex justify-between items-end gap-5'>
                         <SectionTitle paragraph={"Find your favourite jobs and get the benefits of yourself"} title_1={"Find by"} title_2={"Location"}></SectionTitle>
                         <div className=' mt-5 sm:mt-0'>
                              <Button paddingX={"px-[30px]"} paddingY={"py-[20px]"} hover={" hover:bg-[#131135]"} text={"All Location"}> </Button>
                         </div>
                    </div>

                    <div className='  grid sm:grid-cols-2   xl:grid-cols-4 sm:gap-2 xl:gap-5 py-5 mt-4'>
                         <div className=' findLocationCard'>
                              <div className='Image_card'>
                                   <Image className=' img rounded-[12px]  w-full h-full' src={image1} alt="image"></Image>
                              </div>
                              <div className='pt-2 '>
                                   <h1> Dhaka</h1>
                                   <div className=' flex  justify-between gap-2 items-center '>

                                        <p> 25 Post  </p>
                                        <p> 80 Product </p>
                                   </div>

                              </div>
                         </div>
                         <div className=' findLocationCard'>
                              <div className='Image_card'>
                                   <Image className=' img rounded-[12px]  w-full h-full' src={image2} alt="image"></Image>
                              </div>
                              <div className='pt-2 '>
                                   <h1> Rajshahi</h1>
                                   <div className=' flex  justify-between gap-2 items-center '>

                                        <p> 42 Post  </p>
                                        <p> 80 Product </p>
                                   </div>

                              </div>
                         </div>
                         <div className=' findLocationCard'>
                              <div className='Image_card'>
                                    <Image className=' img rounded-[12px]  w-full h-full' src={image3} alt="image"></Image>
                              </div>
                              <div className='pt-2 '>
                                   <h1> Dhaka</h1>
                                   <div className=' flex  justify-between gap-2 items-center '>

                                        <p> 25 Post  </p>
                                        <p> 80 Product </p>
                                   </div>

                              </div>
                         </div>
                         <div className=' findLocationCard'>
                              <div className='Image_card'>
                                   <Image className=' img rounded-[12px]  w-full h-full' src={image4} alt="image"></Image>
                              </div>
                              <div className='pt-2 '>
                                   <h1> Dhaka</h1>
                                   <div className=' flex  justify-between gap-2 items-center '>

                                        <p> 25 Post  </p>
                                        <p> 80 Product </p>
                                   </div>

                              </div>
                         </div>
                         <div className=' findLocationCard'>
                              <div className='Image_card'>
                                   <Image className=' img rounded-[12px]  w-full h-full' src={image5} alt="image"></Image>
                              </div>
                              <div className='pt-2 '>
                                   <h1> Dhaka</h1>
                                   <div className=' flex  justify-between gap-2 items-center '>

                                        <p> 25 Post  </p>
                                        <p> 80 Product </p>
                                   </div>

                              </div>
                         </div>
                         <div className=' findLocationCard'>
                              <div className='Image_card'>
                                   <Image className=' img rounded-[12px]  w-full h-full' src={image6} alt="image"></Image>
                              </div>
                              <div className='pt-2 '>
                                   <h1> Dhaka</h1>
                                   <div className=' flex  justify-between gap-2 items-center '>

                                        <p> 25 Post  </p>
                                        <p> 80 Product </p>
                                   </div>

                              </div>
                         </div>
                         <div className=' findLocationCard'>
                              <div className='Image_card'>
                                   <Image className=' img rounded-[12px]  w-full h-full' src={image7} alt="image"></Image>
                              </div>
                              <div className='pt-2 '>
                                   <h1> Dhaka</h1>
                                   <div className=' flex  justify-between gap-2 items-center '>

                                        <p> 25 Post  </p>
                                        <p> 80 Product </p>
                                   </div>

                              </div>
                         </div>
                         <div className=' findLocationCard'>
                              <div className='Image_card'>
                                   <Image className=' img rounded-[12px]  w-full h-full' src={image5} alt="image"></Image>
                              </div>
                              <div className='pt-2 '>
                                   <h1> Dhaka</h1>
                                   <div className=' flex  justify-between gap-2 items-center '>

                                        <p> 25 Post  </p>
                                        <p> 80 Product </p>
                                   </div>

                              </div>
                         </div>
                         
                    </div>



               </Container>

          </div>
     );
};

export default FindByLocation;
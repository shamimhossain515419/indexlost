import React from 'react';
import Container from '../Container/Container';
import "./hero.css"
import Image from 'next/image';
import VectorImage1 from "../../assets/Home/hero/Group 1000002971.svg"
import VectorImage2 from "../../assets/Home/hero/Group 1000002969 (2).svg";
import Ellipse1 from "../../assets/Home/hero/Ellipse 402 (1).svg"
import Ellipse2 from "../../assets/Home/hero/Ellipse 402 (2).svg"
const Hero = ({ title, Paragraph, name }) => {
     return (
          <div className=' relative min-h-[250px] w-full bg-[#E5F1FF] py-11 xl:py-24'>
               <Container>
                    <div className='   max-w-[730px]  mx-auto text-center p-1 md:p-3'>
                         <div className='heroContainer'>
                              <h5> {title} </h5>
                              <h1 className=' md:text-[64px] text-[44px]'> {name} </h1>
                              <p>{Paragraph}</p>

                         </div>
                    </div>
               </Container>

               <div className='  hidden md:block absolute  top-20 left-0  '>
                    <Image src={VectorImage1} alt='image' />
               </div>
               <div className='hidden md:block absolute  top-20  right-0  '>
                    <Image src={VectorImage1} alt='image' />
               </div>
               <div className=' hidden md:block  absolute  top-20 right-1/3 '>
                    <Image src={Ellipse1} alt='image' />
               </div>
               <div className=' hidden md:block  absolute  top-20 left-1/3 '>
                    <Image src={Ellipse2} alt='image' />
               </div>
               <div className=' hidden md:block  absolute  bottom-20 left-1/4 '>
                    <Image src={VectorImage2} alt='image' />
               </div>

          </div>
     );
};

export default Hero;
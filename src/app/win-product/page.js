import React from 'react';
import "./inex.css"
import Hero from '@/Components/Hero/Hero';
import PostCard from '@/Components/PostCard/page';
import Container from '@/Components/Container/Container';
import SectionTitle from '@/Components/SectionTitle/SectionTitle';
import Button from '@/Components/Button/Button';
const winPage = () => {

     return (
          <div>

               <div className='Hero'>
                    <Hero title={"Win Product"} name={" New Success  Product"} Paragraph={"Optimized for a smaller build size, faster dev compilation and dozens of other improvements"} ></Hero>
               </div>

               <div className=' mt-8 '>
                    <SectionTitle alignment={'text-center'} title_1={"Show New"} title_2={"Success"} title_3={" lost 50 Product "} paragraph={"Please Check Success Product"}></SectionTitle>

               </div>

               <Container>
                    <div className=' py-10 grid md:grid-cols-2 xl:grid-cols-3 md:gap-3 xl:gap-10'>
                         <PostCard></PostCard>
                         <PostCard></PostCard>
                         <PostCard></PostCard>
                         <PostCard></PostCard>
                         <PostCard></PostCard>
                         <PostCard></PostCard>

                    </div>
                    <div className=' py-5 text-center  mx-auto  '>

                         <div className='text-center inline-block '>
                              <Button  paddingX={"px-[30px]"} paddingY={"py-[15px]"} text={"See more"}></Button>
                         </div>
                    </div>
               </Container>






          </div>
     );
};

export default winPage;
import Container from '@/Components/Container/Container';
import Hero from '@/Components/Hero/Hero';
import SectionTitle from '@/Components/SectionTitle/SectionTitle';
import React from 'react';
import image1 from "../../assets/about/outTeam (1).png";
import image2 from "../../assets/about/outTeam (2).png";
import image3 from "../../assets/about/outTeam (3).png";
import image4 from "../../assets/about/outTeam (4).png";
import Image from 'next/image';
import './index.css'
const AboutPage = () => {
     return (
          <div>
               <Hero title={"About our company"} Paragraph={"Our team of experts who have been in the profession for years focuses on helping you achieve optimal technical surface."} name={"Your Trusted TechPro Partner"}></Hero>



               <Container>
                    <div>
                         <div className="   py-5">
                              <div className=" Container">
                                   <div>
                                        <div>
                                             <SectionTitle alignment={"text-center"} title_1={"Our "} title_2={"Team"} paragraph={"Meet our creative team"}></SectionTitle>

                                        </div>

                                        <div className=" sm:grid sm:grid-2  md:grid-cols-3 xl:grid-cols-4  gap-3 ">
                                             <div className="team_card shadow">
                                                  <div>
                                                       <Image src={image1} alt="" />
                                                  </div>
                                                  <div className=" my-3">
                                                       <h1>Faye Carson </h1>
                                                       <p>Instructor</p>
                                                  </div>

                                             </div>
                                             <div className="team_card shadow">
                                                  <div>
                                                       <Image src={image2} alt="" />
                                                  </div>
                                                  <div className=" my-3">
                                                       <h1>Faye Carson </h1>
                                                       <p>Instructor</p>
                                                  </div>

                                             </div>
                                             <div className="team_card shadow">
                                                  <div>
                                                  <Image src={image3} alt="" />
                                                  </div>
                                                  <div className=" my-3">
                                                       <h1>Faye Carson </h1>
                                                       <p>Instructor</p>
                                                  </div>

                                             </div>
                                             <div className="team_card shadow">
                                                  <div>
                                                  <Image src={image4}  alt="" />
                                                  </div>
                                                  <div className=" my-3">
                                                       <h1>Faye Carson </h1>
                                                       <p>Instructor</p>
                                                  </div>

                                             </div>
                                             <div className="team_card shadow">
                                                  <div>
                                                  <Image src={image4}  alt="" />
                                                  </div>
                                                  <div className=" my-3">
                                                       <h1>Faye Carson </h1>
                                                       <p>Instructor</p>
                                                  </div>

                                             </div>

                                             <div className="team_card shadow">
                                                  <div>
                                                  <Image src={image3} alt="" />
                                                  </div>
                                                  <div className=" my-3">
                                                       <h1>Faye Carson </h1>
                                                       <p>Instructor</p>
                                                  </div>

                                             </div>
                                             <div className="team_card shadow">
                                                  <div>
                                                  <Image src={image4}  alt="" />
                                                  </div>
                                                  <div className=" my-3">
                                                       <h1>Faye Carson </h1>
                                                       <p>Instructor</p>
                                                  </div>

                                             </div>
                                             <div className="team_card shadow">
                                                  <div>
                                                  <Image src={image1}  alt="" />
                                                  </div>
                                                  <div className=" my-3">
                                                       <h1>Faye Carson </h1>
                                                       <p>Instructor</p>
                                                  </div>

                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                    </div>
               </Container>



          </div>
     );
};

export default AboutPage;
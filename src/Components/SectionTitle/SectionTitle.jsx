import React from 'react';
import './SectionTitle.css'
const SectionTitle = ({ title_1, title_2, title_3, alignment, paragraph }) => {
     return (
          <div className={` ${alignment}  my-9`} >
               <h1> {title_1} <span> {title_2} </span> {title_3}  </h1>
               <p className=' m-0'> {paragraph}</p>
          </div>
     );
};

export default SectionTitle;
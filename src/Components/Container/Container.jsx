import React from 'react';

const Container = ({ children }) => {
     return (

          <div className='max-w-[1408px] mx-auto px-2   '>
          <div className=" w-full md:mx-8">
               {children}
          </div>
     </div>
     );
};

export default Container;
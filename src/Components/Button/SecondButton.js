import React from 'react';
import './index.css'
const SecondButton = ({ text, paddingX, paddingY, bg,  hover }) => {
     return (
          <div className={` duration-300  ${bg}  secondButton ${paddingY} ${hover} ${paddingX}  `}  >
               <button>{text}</button>
          </div>
     );
};

export default SecondButton;
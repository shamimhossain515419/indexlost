import React from 'react';
import './index.css'
const Button = ({ text, paddingX, paddingY, bg,  hover }) => {
     return (
          <div className={` duration-300  ${bg}  button ${paddingY} ${hover} ${paddingX}  `}  >
               <button>{text}</button>
          </div>
     );
};

export default Button;
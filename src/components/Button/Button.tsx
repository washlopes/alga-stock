import React from 'react';

import './Button.css'
// import { Container } from './styles';

declare interface ButtonProps  {
  rotulo? : string
  onClick?: () => void
}

const Button: React.FC <ButtonProps> = (props) => {
  return <button 
    className="AppButton"
    onClick={props.onClick}
     >
      { props.children}
    </button>
}

export default Button;
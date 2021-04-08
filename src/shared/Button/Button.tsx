import React from 'react';

import './Button.css'
// import { Container } from './styles';

declare interface ButtonProps  {
  rotulo? : string
  onClick?: () => void
  appendIcon?: JSX.Element
}

const Button: React.FC <ButtonProps> = (props) => {
  return <button 
    className="AppButton"
    onClick={props.onClick}
     >
      { props.children}
      { props.appendIcon}
    </button>
}

export default Button;
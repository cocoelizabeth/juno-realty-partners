import React from 'react';
import { LogoStyles } from '../styles/LogoStyles';
import junoLogoSrc from '../images/juno-realty-partners-logo-black.svg'

function Logo() {
  return (
     <img
        src={junoLogoSrc}
        alt="Juno Realty Partners"
        style={{ height: 40, width: 'auto', display: 'block'}}
     />
  );
}

export default Logo;

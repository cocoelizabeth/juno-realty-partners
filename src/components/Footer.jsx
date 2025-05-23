import React from 'react';
import { FooterStyles } from '../styles/FooterStyles';
import { Link } from "gatsby";

const Footer = () => {
    <FooterStyles>
         <p>Contact us at hello@junorp.com</p>
           <p>© {new Date().getFullYear()} Juno Realty Partners</p>
    </FooterStyles>
};

export default Footer;
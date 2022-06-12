import React from 'react';
import styled from 'styled-components';
import { FaDiscord, FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Container = styled.div`
 background-color: #fff;
 color: #222;
 padding: 3em;
 text-align: center;
`;

const SociaisItems = styled.ul`
 display: flex;
 justify-content: center;
 list-style-type: none;
`;

const Li = styled.li`
 margin: 0 1em;

 &:hover {
   color: #ffbb33;
 }
`;

const Copy = styled.p`
 margin-top: 2em;

 span {
   font-weight: bold;
   color: #ffbb33;
 }
`;

const Footer = () => {
 return (
 <Container>
   <SociaisItems>
     <Li>
       <FaDiscord />
     </Li>
     <Li>
       <FaInstagram />
     </Li>
     <Li>
       <FaFacebookSquare />
     </Li>
   </SociaisItems>
   <p>
     <span>Canedo</span> &copy; 2022
   </p>
 </Container>
 );
}

export default Footer;
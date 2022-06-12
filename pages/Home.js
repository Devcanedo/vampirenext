import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';

const Container = styled.div`

`;

const Title = styled.h1`
 display: flex;
 height: 100vw;
 justify-content: center;
 color: white;
 font-family: 'bold';
`;

const Home = () => {
 return (
   <>
  <div>
    <Title>Vampire Event</Title>
  </div>
  <Footer />
  </>
 );
}

export default Home;
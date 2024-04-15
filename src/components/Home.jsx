import React from 'react';
import '../styled/Home.css';
import Nav from './Nav';
import Banner from './Banner';

const Home = () => {
  return (
    <div className='home'>
      <Nav/>
      <Banner/>
      {/* {Row} */}
    </div>
  )
}

export default Home
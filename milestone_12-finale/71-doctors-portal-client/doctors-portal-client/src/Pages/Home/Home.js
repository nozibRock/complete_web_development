import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import Services from './Services/Services';

const Home = () => {
    return (
      <div>
        {/* <h2>This is home</h2> */}
        <Banner></Banner>
        <Info/>
        <Services />
      </div>
    );
};

export default Home;
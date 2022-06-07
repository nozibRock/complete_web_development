import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info/Info';

const Home = () => {
    return (
      <div>
        {/* <h2>This is home</h2> */}
        <Banner></Banner>
        <Info/>
      </div>
    );
};

export default Home;
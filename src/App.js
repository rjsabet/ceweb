import logo from './logo.svg';
import React, { useEffect } from 'react';
import TopBar from './components/TopBar';
import SolidSection from './components/SolidSection';
import ImageSection from './components/ImageSection';
import './App.css';

function App() {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="App">
      <div className='Home'>
        <TopBar />
        <ImageSection
          setBackgroundImg="/derrick-brooks-EZtZyYs95lw-unsplash.jpg" //First section background
          sectionHeight={"70vh"}
          displayText={"none"}
        />
        <ImageSection 
          setbackgroundColor={"#fff"}
          setTextColor={"#000"}
          sectionHeight={600}
          settextAlign={"left"}
          headerText={"DISCOVER OUR STORY"}
          textBody={"We are a family owned electrical contracting componay servicing the Greater Richmond area"}
          setBackgroundImg="/Typical-electrical-plan-for-a-small-one-family-house-Image-was-retrieved-from.png" //Floor plan background
          setbackgroundPos={'left 9%'}
          setbackgroundSize={'120%'}
        />
      </div>
    </div>
  );
}

export default App;

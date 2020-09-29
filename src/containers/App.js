import React from 'react';
import NavBar from './NavBar';
import InfoMain from './Info';
import Projects from './Projects';
import Stacks from './Stacks';
import ContactForm from './ContactForm';
import Background from '../assets/main.png';

const style = {
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'scroll',
  backgroundImage: `url(${Background})`,
};

function App() {
  return (
    <div className="App" style={style}>
      <NavBar />
      <InfoMain />
      <Projects />
      <Stacks />
      <ContactForm />
    </div>
  );
}

export default App;

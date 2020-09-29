import React from 'react';
import NavBar from './NavBar';
import InfoMain from './Info';
import Projects from './Projects';
import Stacks from './Stacks';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <InfoMain />
      <Projects />
      <Stacks />
      <ContactForm />
    </div>
  );
}

export default App;

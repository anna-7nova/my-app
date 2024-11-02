import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import { Rating } from './components/Rating/Rating';

function App() {
  return (
    <div>
      <AppTitle/>
      <Rating value={5}/>
      <Accordion titleValue="Menu" collapsed={false}/>
      <Accordion titleValue="List" collapsed={true}/>
      <Rating value={2}/>
    </div>
  );
}

function AppTitle() {
  return (<>this is the new app</>);
}



export default App;

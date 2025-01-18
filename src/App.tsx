import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import { Rating } from './components/Rating/Rating';
import { OnOff } from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';

function App() {
  return (
    <div>
      <AppTitle/>
      <Rating value={5}/>
      <Accordion titleValue="Menu" collapsed={false}/>
      <Accordion titleValue="List" collapsed={true}/>
      <Rating value={2}/>
      <div>
        <OnOff />
        <OnOff />
      </div>
      <UncontrolledAccordion titleValue="Menu"/>
      <UncontrolledAccordion titleValue="List"/>
      <UncontrolledRating/>
      <UncontrolledRating/>
    </div>
  );
}

function AppTitle() {
  return (<>this is the new app</>);
}



export default App;

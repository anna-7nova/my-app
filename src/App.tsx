import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import { Rating } from './components/Rating/Rating';
import { OnOff } from './components/OnOff/OnOff';
import { Button } from './components/Button/Button';

function App() {
  return (
    <div>
      <AppTitle/>
      <Rating value={5}/>
      <Accordion titleValue="Menu" collapsed={false}/>
      <Accordion titleValue="List" collapsed={true}/>
      <Rating value={2}/>
      <div>
        <OnOff isTurnIn={true}/>
        <OnOff isTurnIn={false}/>
      </div>
    </div>
  );
}

function AppTitle() {
  return (<>this is the new app</>);
}



export default App;

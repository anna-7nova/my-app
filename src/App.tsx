import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import { Rating } from './components/Rating/Rating';
import { OnOff } from './components/OnOff/OnOff';

function App() {
  //styles
  // title ==="on"
  //   ? {"background-color: green"}
  //   : {"background-color: red"}


  return (
    <div>
      <AppTitle/>
      <Rating value={5}/>
      <Accordion titleValue="Menu" collapsed={false}/>
      <Accordion titleValue="List" collapsed={true}/>
      <Rating value={2}/>
      <div>
        <OnOff type={"button"} value={"on"} />
        <OnOff type={"button"} value={"off"} />
        <OnOff type={"radio"} />
        
      </div>
    </div>
  );
}

function AppTitle() {
  return (<>this is the new app</>);
}



export default App;

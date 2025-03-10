import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import { Rating, ValueType } from './components/Rating/Rating';
import { UncontrolledOnOff } from './components/UncontrolledOnOff/UncontrolledOnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';
import { OnOff } from './components/OnOff/OnOff';

function App() {
  //states
const [collapsed, setCollapsed] = useState(true)
const [ratingValue, setRatingValue] = useState<ValueType>(0)
const [currentBtnIsOn, setCurrentBtnIsOn] = useState<boolean>(false)

//handlers
const onChangeAccordionHandler = ()=>setCollapsed(!collapsed)
const onClickOnOffHandler = () => setCurrentBtnIsOn(!currentBtnIsOn)

  return (
    <div>
      <AppTitle/>
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <Accordion titleValue="Menu" collapsed={collapsed} onChange={onChangeAccordionHandler} items={[]} onClick={()=>{}}/>
      <Accordion titleValue="List" collapsed={collapsed} onChange={onChangeAccordionHandler} items={[]} onClick={()=>{}}/>
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <div>
        <OnOff onClick={onClickOnOffHandler} on={currentBtnIsOn}/>
        <OnOff onClick={onClickOnOffHandler} on={currentBtnIsOn}/>
      </div>
      <div>
        <UncontrolledOnOff onChange={setCurrentBtnIsOn}/>{currentBtnIsOn.toString()}
      </div>
      <UncontrolledAccordion titleValue="Menu"/>
      <UncontrolledAccordion titleValue="List"/>
      <UncontrolledRating/>
      <UncontrolledRating/>
    </div>
  );
}

function AppTitle() {
  return <>this is the new app</>;
}



export default App;

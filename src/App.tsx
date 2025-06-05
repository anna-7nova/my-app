import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import { Rating, ValueType } from './components/Rating/Rating';
import { UncontrolledOnOff } from './components/UncontrolledOnOff/UncontrolledOnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';
import { OnOff } from './components/OnOff/OnOff';
import { ItemsPropsType, Select } from './components/Select/Select';
import { memoizedSqr } from './tasks/le-task';

function App() {
  //states
  const [collapsed, setCollapsed] = useState(true)
  const [ratingValue, setRatingValue] = useState<ValueType>(0)
  const [currentBtnIsOn, setCurrentBtnIsOn] = useState<boolean>(false)


  //busines logic
  const data: ItemsPropsType[] = [
    { value: "1", title: "Italy" },
    { value: "2", title: "France" },
    { value: "3", title: "Norway" },
  ]

  //handlers
  const onChangeAccordionHandler = () => setCollapsed(!collapsed)
  const onClickOnOffHandler = () => setCurrentBtnIsOn(!currentBtnIsOn)
  const onChangeSelectHandler = (collapsed: boolean, currentChoice: string) => {
    setCollapsed(!collapsed)
  }
  const [currentChoice, setCurrentChoice] = useState("none")

  console.log(memoizedSqr(5)); //calculation
  console.log(memoizedSqr(8)); //from cache
  console.log(memoizedSqr(6)); //calculation
  console.log(memoizedSqr(5)); //from cache

  return (
    <div>
      <AppTitle />
      <Rating value={ratingValue} onClick={setRatingValue} />
      <Accordion titleValue="Menu" collapsed={collapsed} onChange={onChangeAccordionHandler} items={[]} onClick={() => { }} />
      <Accordion titleValue="List" collapsed={collapsed} onChange={onChangeAccordionHandler} items={[]} onClick={() => { }} />
      <Rating value={ratingValue} onClick={setRatingValue} />
      <div>
        <OnOff onClick={onClickOnOffHandler} on={currentBtnIsOn} />
        <OnOff onClick={onClickOnOffHandler} on={currentBtnIsOn} />
      </div>
      <div>
        <UncontrolledOnOff onChange={setCurrentBtnIsOn} />{currentBtnIsOn.toString()}
      </div>
      <UncontrolledAccordion titleValue="Menu" />
      <UncontrolledAccordion titleValue="List" />
      <UncontrolledRating />
      <UncontrolledRating />
      <Select items={data} onClick={(currentChoice)=>{setCurrentChoice(currentChoice)}} propsValue={currentChoice}/>
    </div>
  );
}

function AppTitle() {
  return <>this is the new app</>;
}



export default App;

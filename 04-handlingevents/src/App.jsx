import React, { useState } from 'react';

const HandlingEvents = () => {

  const [teslaBattery, setTeslaBattery] = useState(100);
  const [count, setCount] = useState(0);

  const handleTeslaDrive = (e) => {
    e.preventDefault();
    setTeslaBattery(previousBatteryLife => previousBatteryLife - 30);
  }

  const handleTeslaCharge = () => setTeslaBattery(() => 100);

  const handleIncrement = e => {
    e.preventDefault();

    for(let i = 0; i < 10000; i++){
      setCount(i);
    } 
  }
  
  const handleTeslaErrorCharge = () => setTeslaBattery(prev => 100);

  const handleKeyPress = e => {
    console.log(e.key);
  }

  const handleMouseEnter = e => {
    console.log("Mouse enter");
  }

  const handlePaste = e => {
    console.log(e.clipboardData.getData('text/plain'));
  }

  

  return <div onKeyDown={handleKeyPress} tabIndex="0">
    <button onClick={handleTeslaDrive}>Drive 100km</button>
    <button onClick={handleTeslaCharge}>Charge Tesla overnight</button>
    <button onClick={handleTeslaErrorCharge}>Error charge</button>
    <button onClick={handleIncrement}>Incrementing counter</button>
    <div tabIndex="0" onMouseEnter={handleMouseEnter} onPaste={handlePaste}>ENTER HERE PLEASE</div>
    <input onPaste={handlePaste}></input>
    {console.log("Rerendering <HandlingEvents>")}
    <div>
      <div>Tesla battery life: { teslaBattery }</div>
      <div>Counter: { count }</div>
    </div>
  </div>
}

export default HandlingEvents;

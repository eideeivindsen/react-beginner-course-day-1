import React, { useState } from 'react';

const RenderMePlease = ({ toggledMessage }) => <div>Yo im here bro {toggledMessage}</div>

const ConditionalRenderingComponent = () => {

  const [toggled, setToggled] = useState(true);
  const [numberToggle, setNumberToggle] = useState(2);
  const [listToggle, setListToggle] = useState([1]);
  const [objectToggle, setObjectToggle] = useState({entry: "entry"});
  const [authenticated, setAuthenticated] = useState(false);
  

  const andOperators = () => false && "jørgen"

  const returnAComponent = () => true && "jørgen" && <RenderMePlease toggledMessage="Chained return"/>;

  const renderCorrectInformation = () => toggled && <RenderMePlease toggledMessage="renderCorrentInformation"/>;

  if(toggled === "Mamma"){
    return <RenderMePlease toggledMessage="if statement"/>
  }

  return <React.Fragment>
    <button onClick={() => setToggled(t => !t)}>TOGGLE</button>
    { authenticated ? <div>authenticated</div> : <div>Not authorized</div>}
    <div>{andOperators()}</div>
    <div>{returnAComponent()}</div>
    <div>{renderCorrectInformation()}</div>
    { toggled && <RenderMePlease toggledMessage="Rendered inline JSX" />}
    { numberToggle < 0 && <RenderMePlease toggledMessage="number" />}
    { listToggle.length > 0 && <RenderMePlease toggledMessage="List" />}
    { Object.entries(objectToggle).length > 0 && <RenderMePlease toggledMessage="Object" /> }
    { toggled && listToggle.length > 0 && Object.entries(objectToggle).length > 0 && <RenderMePlease toggledMessage="Super chain"/>}
  </React.Fragment>

}

export default ConditionalRenderingComponent;

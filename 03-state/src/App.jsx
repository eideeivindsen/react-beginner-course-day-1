import React, { useState } from 'react';

const Eksempel = () => <div>Hallaballa</div>

class FacebookMessage {
  constructor(name, age, message, timeSent){
    this.name = name;
    this.age = age;
    this.message = message;
    this.timeSent = timeSent;
  }

  getName = () => this.name;
  getAge = () => this.age;
  getMessage = () => this.message;
  getTimeSent = () => this.timeSent;
}

const computeExpensive = () => {
  let count = 0;
  for(let i = 0; i < 10000; i++){
    count += 1
  }
  return count;
}

const KomponentMedTilstand = () => {

  /*
    useState(number | string | Array<T> | object | boolean)
  */

  const [tilstand, setTilstand] = useState("Min tilstand");
  const [state, setState] = useState("My state");
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({name: "Jørgen", age: "24"});
  const [teslaState, setTeslaState] = useState({ battery: 80, estimatedKmLeft: 600, speakerVolume: 20, owner: "Jørgen Stamnes", model:"Roadster"});
  const [carIsLocked, setCarIsLocked] = useState(true);
  const [kursHoldere, setKursHoldere] = useState(["Jørgen", "Joachim", "Amund"]);
  const [expensiveShit, setExpensiveShit] = useState(() => computeExpensive());

  // useState( List<FacebookMessage> )
  // FacebookMessage = { name: string, age: string, message: string, timeSent: Date}
  const [facebookMessage, setMessages] = useState(new FacebookMessage(person.name, person.age, "Halla", new Date()))
  

  const todo = {
    gjoremal1: "vaske",
    gjoremal2: "progge"
  };

  const [todos, setTodos] = useState([todo, todo, todo]);

  // destrucured tesla state
  const {
    battery,
    estimatedKmLeft,
    speakerVolume,
    owner
  } = teslaState;

  return <div>
    <div>
      tilstand: { tilstand }
    </div>
    <div>
      state: { state }
    </div>
    <div>
      count: { count }
    </div>
    <div>
      fornavn {person.name} og år {person.age}
    </div>
    <div>
      teslaState: { battery }% { estimatedKmLeft }km { speakerVolume }% { owner }
    </div>
    <div>
      {facebookMessage.getAge() + facebookMessage.getMessage() + facebookMessage.getName() + facebookMessage.getTimeSent()}
    </div>
  </div>

}

const Both = () => {
  const [state, setState] = useState({ backgroundColor: "white", count: 0 })

  const increment = () => setState(prevState => {
    return { backgroundColor: prevState.backgroundColor, count: prevState.count + 1 }
  });
  
  const decrement = () => setState(({ count, ...prevState}) => ({
    ...prevState, count: count - 1})
  )

  const handleMouseEnter = () => setState(prevState => ({
      count: prevState.count, backgroundColor: "purple"
  }));

  const handleMouseLeave = () => setState(prevState =>  ({
      ...prevState, backgroundColor: "white"
  }));

  const {
      count,
      backgroundColor
  } = state;

  return (
      <React.Fragment>
          <div
          style={{width: 250, height: 250, backgroundColor}}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          />
          <h1>My count: {count}</h1>
          <button onClick={increment}>Increment by 1</button>
          <button onClick={decrement}>Decrement by 1</button>
      </React.Fragment>
  )
}

export default Both;

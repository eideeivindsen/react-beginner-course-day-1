import React, { useEffect, useState} from 'react';

const App = () => {
    const [toggle, setToggle] = useState(true);
    const [random, setRandom] = useState(0);

    //This function updates the randomm value every 3 seconds, causing the page to re-render
    useEffect(() => {
        setTimeout(() => {
            setRandom(Math.random())
        }, 3000);
      });
      

     useEffect(() => {
        console.log(toggle)
    },[toggle])


    return (
        <div>
            <button onClick={() => setToggle(toggle => !toggle)}>Toggle</button>
        </div>
    )
}

export default App;
import React, { useState } from "react";

const App = () => {
    const [state, setState] = useState(
        {count: 0, name: "Joergen", hasCorona: false }
        );

    const [favColors, setFavColors] = useState(
        ["pink","blue", "red"]
        );

    const {
        count,
        name,
        hasCorona
    } = state;

    const [ pink, blue, red ] = favColors;

    return (
        <div>
            <div>{count}</div>
            <div>{name}</div>
            <div>{hasCorona}</div>
            <ul>
                <li>{pink}</li>
                <li>{blue}</li>
                <li>{red}</li>
            </ul>
        </div> 
    )
}

export default App

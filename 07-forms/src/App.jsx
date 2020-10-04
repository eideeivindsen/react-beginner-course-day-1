import React, { useState } from 'react';

const App = () => {

    const handleSubmit = (event) => {
        alert("The form was submitted.");
      }
    
    return (
        <form onSubmit={handleSubmit}>
            ...
            <input type="submit" value="Submit" />
        </form>
    )
}

export default App;
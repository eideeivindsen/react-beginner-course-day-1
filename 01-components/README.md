# JSX and Components

## JSX

JSX is a syntax extensions to JavaScript that enables HTML-like syntax in JavaScript code. The JSX code `<p>Hello</p>` is essentially a JavaScript object. JSX is used to define what is rendered on the screen in React. Place `{ }` inside JSX code to write common javascript, as done with `{ someone }` below.
```jsx
const jsx = <p>Hello JSX!</p>

const someone = "World"
const greeting = <p>Hello { someone }</p>
```

JSX and common JS can be nested inside each other, for more complex content.
```jsx
const jsx = <p>Hello JSX!</p>
const paragraphs = <div>
    { jsx }
    { <p>{ 1 + 2 }</p> }
</div>
```

`ReactDOM.render` is used to place content on the page. In the code below, the element `<h1>React!</p>` will be placed inside the HTML element with `id="root"`, which is defiend within `index.html`. Remember to import `React` so that JSX sytax is allowed.
```jsx
import React from 'react'
import ReactDOM from 'react-dom'

const element = <h1>React!</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

<br>

#### 📌 A1 - Inspect and run the code in 01-components
Look at `index.html`, `index.css`, and `index.js` inside `01-components/`. Run the command `npm run 01` from within the project root folder to launch the React application. A webpage with the content "It's working!" should appear. If you inspect the web content (right click => inpsect), you can see that something is added into the `id="root"` element in `index.html`.

<br>

#### 📌 A2 - Hot reaload!
Delete the css rule inside `index.css`, while react is running. The website should update immediately when you save the file.

<br>

#### 📌 A3 - Render something with JSX
Make changes to `index.js`, so that a JSX element is rendered on screen. Remember to first import React, as described earlier.
<details><summary>🔑 Solution</summary>

```jsx
import ReactDOM from 'react-dom'
import React from 'react'

import './index.css'

ReactDOM.render(
    <p>This is JSX</p>,
    document.getElementById('root')
)
```
</details>


<br><br>

## Component
In React, a component is essentialy a function that returns React content to render on screen. A component can be used multiple times in an application, and is isolated from other components. The component below is a function without any paramaters, that returns the JSX content `<p>Hello world!</p>`.
```jsx
// greeting.jsx
const Greeting = () => <p>Hello world!</p>

export default Greeting;
```
Multiple components may exist in the same file, but are typically defined in separate files. `export default Greeting;` exports the component so that other components can import it from `greeting.jsx`.

More complex components often have a function body, and use a `return` statement to define what is rendered. The `Time` component below imports `Greeting` and renders it along with the current date and time. As only a single value can be returned by a function, the two elements are placed inside `<> </>`. These tags will not be visible in the rendered HTML.
```jsx
import Greeting from './greeting.jsx'

const Time = () => {
    const now = new Date();

    return <>
        <Greeting />
        <p>{ now.toString() }</p>
    </>
}
```

#### 📌 B1 - Create your first component
Open `App.jsx` and return some JSX instead of `null`. Then, in `index.js`, import the `App` from `'./App'` and render your `<App />` component!
<details><summary>🔑 Solution</summary>

```jsx
// App.jsx
import React from 'react'

const App = () => <>
    <h1>Go big!</h1>
</>

export default App
```
```jsx
// index.jsx
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'

import './index.css'

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
```
</details>

<br>

#### 📌 B2 - Create another component in `App.jsx` and render it inside the `App` component
You may create anything you want. If you use your new component multiple times inside the `App` component, that is even better!

<details><summary>🔑 Solution</summary>

```jsx
// App.jsx
import React from 'react'

const App = () => <>
    <Star /><Star /><Star />
    <h1>Go big!</h1>
    <Star /><Star /><Star />
</>

const Star = () => <span>⭐</span>

export default App
```
</details>

<br>

#### 💎 B3 - Move the new component to a separate file, and import it in `App.jsx`
Import your compoment the same way `index.js` imports `App`, with a relative filepath and without the file extension: `import App from './App'`.
<details><summary>🔑 Solution</summary>

```jsx
// App.jsx
import React from 'react'
import Star from './Star'

const App = () => <>
    <Star /><Star /><Star />
    <h1>Go big!</h1>
    <Star /><Star /><Star />
</>

const Star = () => <span>⭐</span>

export default App
```
```jsx
// Star.jsx
import React from 'react'

const Star = () => <span>⭐</span>

export default Star
```
</details>
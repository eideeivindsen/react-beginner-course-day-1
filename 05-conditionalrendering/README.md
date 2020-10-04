# Conditional rendering

## Rendering different

Lets say that you want to display something by navigating through some tabs. What about extra functionality by a dropdown, or a menu-button? Here's where conditional rendering comes into play. Lets recap on some basic but wacky javascript specific syntax.

conditional logic by `condition ? true : false`



```js
const condition = false;

const getMessage = () => condition ? "Its true" : "Its false";

const otherMessage = () => {
    if(conditon){
        return "Its true"
    }
    return "Its false"
}

console.log(getMessage());

// console.logs "Its true"
```

The special and-operator `&&`

```js
const showMessageMaybe = false && true && false && "message";

console.log(showMessageMaybe)

//console.logs "false"

const trueMessage = true && true && true && "Actually true"

console.log(trueMessage)

//console.logs "Actually true"
```

Since React is pure javascript, the same goes for conditions and components.

```jsx
const Header = () => <h1>Hello world!</div>;

const App = () => {
    return (
        <React.Fragment>
            {/* the condition decides whether <Header />
            is shown */}
            {true && <Header />}
            {false && <Header />}
        </React.Fragment>
    )
}
```

<br>

#### 📌 A1 - Create a button that toggles some text.
<br>

<details><summary>Solution</summary>

<br>

```jsx
const Text = () => <p>This is my special text</p>

const App = () => {
    const [toggleText, setToggleText] = useState(false);

    return (
        <React.Fragment>
            <button onClick={() => setToggleText(!toggleText)}>Toggle text </button>
            {toggleText && <Text />}
        </React.Fragment>
    )
}
```
</details>

<br>

#### 📌 A2 - Multiple tabs with Text
<br>

<details><summary>Solution</summary>

```jsx
const Text = () => <p>This is tab numero uno</p>

const Text2 = () => <p>This is tab number 2. The text is a bit different </p>

const Text3 = () => <p>Text 3 is crazy good</p>

const App = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <React.Fragment>
            <button onClick={() => setTabIndex(0)}>Tab 1</button>
            <button onClick={() => setTabIndex(1)}>Tab 1</button>
            <button onClick={() => setTabIndex(2)}>Tab 1</button>
            {tabIndex === 0 <Text />}
            {tabIndex === 1 <Text2 />}
            {tabIndex === 2 <Text3 />}
        </React.Fragment>
    )
}
```
</details>

<br>

#### 💎
<br>

<details><summary>Solution</summary>


```jsx
const greeting = (name) => () => `Hello ${name}!`
```
</details>


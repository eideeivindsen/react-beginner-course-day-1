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

Add some component-state with useState and create a button that can handle (any event of your choice) that creates a toggle effect to show and hide some text.

<br>

```jsx
const Text = () => <p>This is my special text</p>

const App = () => {
    const [toggleText, setToggleText] = useState(false);

    return (
        <React.Fragment>
            <button onClick={() => setToggleText(!toggleText)}>Toggle text</button>
            {toggleText && <Text />}
        </React.Fragment>
    )
}
```
</details>

<br>

#### 📌 A2 - Multiple tabs with Text
<br>

Add some component state with useState that manages which tab the user is currently on. Create a component `<Character />` that recieves the  `name` prop. Add three buttons that resembles a tab. The user should be able to navigate through some of the characters in Førstegangstjenesten.

* Ola halvorsen
* Ahre-ketil
* Preben lohrengren


<details><summary>Solution</summary>

```jsx
const Character = ({ name }) => <h1>{ name }</h1>;

const App = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <React.Fragment>
            <button onClick={() => setTabIndex(0)}>Tab 1</button>
            <button onClick={() => setTabIndex(1)}>Tab 2</button>
            <button onClick={() => setTabIndex(2)}>Tab 3</button>
            {tabIndex === 0 && <Character name="Ola Halvorsen" />}
            {tabIndex === 1 && <Character name="Ahre-ketil" />}
            {tabIndex === 2 && <Character name="Preben Lohrengren" />}
        </React.Fragment>
    )
}
```
</details>

<br>

#### 💎 Create a login and logout page
<br>

This 


<details><summary>Solution</summary>


```jsx
const greeting = (name) => () => `Hello ${name}!`
```
</details>


# Forms

## Controlled components

The way to keep track of the state of a form element in React is by using controlled components. This creates a two way data binding by assigning the value of the input field to be a state value. As well as having a onChange handler on the input field that updates the state value. 

```jsx
const [inputValue, setInputValue] = useState("");

const handleChange = (event) => {
    setInputValue(event.target.value);
  }

return (
    <input type="text" value={inputValue} onChange={handleChange} />
)
```


## Prevent default behaviour

The standard beviour for a HTML form is to browse to a new page when the form is submitted. To avoid this behaviour, the `preventDefault()` method has to be called on the submit event.

```jsx
const handleSubmit = (event) => {
    event.preventDefault();
    alert("The form was submitted.");
  }

return (
    <form onSubmit={handleSubmit}>
        ...
    </form>
)
```

## Multiple controlled components

To avoid creating multiple state variables and event handlers for each form element we use the `useReducer()` hook and generic handleChange method.
`useReducer()` takes a function(called reducer) that determines how React will update your state given the new state.
Notice that each form element needs a `name` property that will be used to determine which state to update.


```jsx
const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      age: ""
    }
  );

  const handleChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;
    setFormInput({ [name]: newValue });
  };

  const { name, age } = formInput;
  return (
      <form>
          <input type="text" name="name" value={name} onChange={handleChange} />
          <input type="number" name="age" value={age} onChange={handleChange} />
      </form>
  )
```

#### 📌 Create a form with a controlled input for name
Combine the above methods to create a form with a two controlled inputs: `First name` and `Last Name`. You also will have to fix the implemented `handleSubmit()` method.

<details><summary>Solution</summary>

```jsx
const handleSubmit = (event) => {
    event.preventDefault();
    alert("The form was submitted.");
  }

return (
    <form onSubmit={handleSubmit}>
        ...
    </form>
)
```
</details>


#### 📌 Create an arrow function without the `return` keyword
The function should have a parameter `name`, and return `Hello <name>!`. Directly write the return value after the arrow `=>`, rather than using curly brackets and a `return` statement.

<details><summary>Solution</summary>

```jsx
const greeting = (name) => `Hello ${name}`
```
</details>


#### 💎 Create an arrow function that returns another arrow function
The function should take name as an argument, and return a function that returns `Hello`, followed by the name. The retured function should not take any arguments. You are not allowed to store the returned arrow function in a variable, but must return it directly.

<details><summary>Solution</summary>

```jsx
const greeting = (name) => () => `Hello ${name}!`
```
</details>


<br><br>

## Destructuring


<br><br>

## Spread operator  `...`


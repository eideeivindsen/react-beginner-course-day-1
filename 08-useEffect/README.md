# JavaScript concepts used in React

## Arrow functions

Arrow functions are used a lot in React. Lets create a few arrow functions with various inputs. They are typically defined as constant variables, as shown with the function `func` below.
```js
const func = () => {}
```


#### 📌 Create an arrow function that returns "Hello World!"
Use the `return` keyword inside the curly brackets.

<details><summary>Solution</summary>

```jsx
const greeting = () => {
    return "Hello World!";
}
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


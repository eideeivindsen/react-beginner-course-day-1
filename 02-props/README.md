# Properties

## Component properties
Untill now, our components have only rendered static content. To make them more dynamic, we can define a funtion parameter `props`. This argument is an object that contains certain properties about the component. You may use any property name.
```jsx
const Greeting = (props) => <p>Hello { props.name }!</p>
```
With many props, the `props.` notation will quickly become anoying. It is therefore common to destructure the props directly in the function. To use multiple properties, simply write multiple variable names when destructuring.
```jsx
const Greeting = ({ name }) => <p>Hello { name }!</p>
```

The properties used by the component, such as `name`, can then be defined when the component is used. Rembember to use `{ }` if the property type is not a string.
```html
<Greeting name="React" />
<VerticalSpace height={ 20 } />
```

<br>

JSX elements such as `div` and `h2` also accept certain properties properties in addition to those in common HTML
* `className` is used to give a component a HTML class
* `style` is used to style the component, with css such as ``
```html
<h1 className="header" style={ {color: 'red'} }>RED!</h1>
```

<br>

#### 📌 A1 - Fix the `Avatar` component so that it displays `name` and `imageUrl` nicely
Use appropriate `className` values and style the component in `index.css`.

<details><summary>🔑 Solution</summary>

```jsx
// App.jsx
const Avatar = ({ name, imageUrl }) => {
    return <div className="avatar">
        <img className="profilepic" src={imageUrl}>
        <p className="name">{name}</p>
    </div>
}
```
```css
.avatar {
    margin: 20px;
    display: inline-block;
    text-align: center;
}

.name {
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
}

.profilepic {
    width: 100px;
    height: auto;
    border-radius: 1000px;
}

```
</details>

<br><br>


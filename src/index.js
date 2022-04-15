import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

function Hello ({name, age, country}) {

  return (
  <div>
    <h1>Hello {name}</h1>
    <p>He is {age} years old, living in {country}.</p>
  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Hello name="Bob" age="25" country="Canada"/>
)



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//       Hello
//   </React.StrictMode>
// );


/*
Notes:
1.0 Following the LI video rendered nothing but when I created a root using ReactDom.CreateRoot..., 
    the text finally appeared. Could the newer boilerplate exclude the created  root, or did the video skip this step?
    The video had only used ReactDOM.render(...), without the CreateRoot part that I added.

1.1  When using ReactDOM.creatElement(), it takes 3 arguments in order: the element you want to render, it's properties, and any children or text.
      The children can also be more elements created using createElement()

1.2. Babel is a tool working behind react that compiles JSX into compatible format for the browser. It's useful for also testing out code of different syntaxes when browsers do not support that syntax.
1.3. Been a long time since making components within the index instead of importing external components. It's still an option, but not recommended!

*/

import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

//  1.0
const root = ReactDOM.createRoot(document.getElementById('root'));


//   1.1
root.render(
  React.createElement("h1", null, "Hello World!"),
  document.getElementById("root")
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
*/

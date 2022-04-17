import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

const lakes = [
  "Ontario",
  "Superior",
  "Erie",
]

const food = [
  {id: 1, food: "pizza", cuisine: "Italian"},
  {id: 2, food: "dumplings", cuisine: "Chinese"},
  {id: 3, food: "Borsch", cuisine: "Ukrainian"}
]

function App({lakes}){
  return (
    <ul>
      {lakes.map(lake => {
        return <li>{lake}</li>
      })}
    </ul>
  )
}

function FoodApp({food}) {
  return (
    <>
      {food.map(fd => {
        return (
          <div key={fd.id}>
            <h1 key={fd.id}>{fd.food}</h1>
            <p>{fd.cuisine} " food"</p>
          </div>
        )
      })}
    </>
  )
}

function CheckBox() {
  const [checked, setChecked] = useState(false)
  return (
    <>
    <input
      type="checkbox"
      value={checked}
      onChange={() => 
        setChecked(checked => !checked)}
    />
    {checked ? "checked" : "unchecked"}
    </>
  )
}

const [dd, ee, ff, gg] = [
  "pig",
  "walrus",
  "panda",
  "snail"
]

function DemoUseEffect() {
 const [phraseOne, setPhraseOne] = useState("")
 const [phraseTwo, setPhraseTwo] = useState("")

useEffect(() => {
  console.log(phraseOne);
  return () => {
  }
}, [phraseOne])

useEffect(() => {
  console.log(phraseTwo);
  return () => {
  }
}, [phraseTwo])

  return (
    <>
    <label>
      Favorite Phrase: 
      <input
        value={phraseOne}
        onChange={e => setPhraseOne(e.target.value)}
        />
    </label>
    <br/>
    <label>
      Second Favorite Phrase:
      <input
        value={phraseTwo}
        onChange={e => setPhraseTwo(e.target.value)}
      />
    </label>
    </>
  )
}

function GitHubUser({login}) {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
    .then(res => res.json())
    .then(results => {
      console.log(results);
      setData(results)
    })
    .catch(error => console.log(error))

  }, []);

  if (data) {
    return(
      <>
        <h1>
          {data.login}
        </h1>
        <img src={data.avatar_url} width="100"/>
      </>
  )
  }
  return null;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App lakes={lakes}/>
    <FoodApp food={food}/>
    <CheckBox />
    <p>I like {ff}</p>
    <DemoUseEffect/>
    <GitHubUser login="glitjch"/>
  </>
)

/*
Notes:
1.0 Following the LI video rendered nothing but when I created a root using ReactDom.CreateRoot..., 
    the text finally appeared. Could the newer boilerplate exclude the created  root, or did the video skip this step?
    The video had only used ReactDOM.render(...), without the CreateRoot part that I added.

1.1  When using ReactDOM.creatElement(), it takes 3 arguments in order: the element you want to render, it's properties, and any children or text.
      The children can also be more elements created using createElement()

1.2. Babel is a tool working behind react that compiles JSX into compatible format for the browser. It's useful for also testing out code of different syntaxes when browsers do not support that syntax.
1.3. Been a long time since making components within the index instead of importing external components. It's still an option, but not recommended!
1.4. mapping usually needs a return statement, so don't always rely on implicit returns.
*/

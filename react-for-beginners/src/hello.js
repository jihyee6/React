import { useEffect, useState } from 'react';
import './App.css';

function Hello(){
  useEffect(()=>{
    console.log("im here");
    return () => console.log("destoryed"); //clean up function으로 컴포넌트가 사라질때 뭔가 해줄수 있도록 도와줌
  },[])

  // 위의 useEffect와 똑같은 방법
  // function byFn(){
  //   console.log("bye");
  // }

  // function hiFn(){
  //   console.log("Hi");
  //   return byFn;
  // }

  // useEffect(hiFn,[]);

  return(
    <h1>Hello</h1>
  )
}


function App() {
  const [counter,setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const showClick = () => setShowing((prev) => !prev);

  const onChange =(event) => setKeyword(event.target.value);
  const onClick = () => setValue((prev) => prev +1);
  console.log("i run all the time");
  const irunOnlyOnce = ()=>{
    console.log("i run only once");
  }
useEffect(() => {
  console.log("ss")  
},[]); //코드가 한번만 실행됨
useEffect(() => {
  if(keyword !== "" && keyword.length > 5){
    console.log("search For", keyword)
  }
},[keyword]);  //keyword가 변화할때 코드를 실행해라

  return (
    <div className="App">
      {/* <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button> */}
      {showing ? <Hello/>:null}
      <button onClick={showClick}>{showing ? "Hide" : "show"}</button>
    </div>
  );
}


export default App;

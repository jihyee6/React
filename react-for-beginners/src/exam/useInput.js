import { useState } from "react";
import "./styles.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let WillUpdate = true;
    if(typeof validator === "function"){
      WillUpdate = validator(value);
      //value의 유효성 검사를 함
      //조건이 true이면 실행 
    }

    if (WillUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

export default function App() {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Ms.", maxLen);

  return (
    <div className="App">
      <h1>Hello </h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

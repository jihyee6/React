import { useEffect, useRef } from "react";
import "./styles.css";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    //useEffect가 mount 되었을때 실행
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

export default function App() {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);
  //클릭하면 ref의 함수가 실행됨
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

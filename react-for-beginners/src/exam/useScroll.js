import { useEffect, useRef, useState } from "react";
import "./styles.css";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
    //event를 추가했으면 같은 이름과 같은 handler로 지워야 함
  }, []);

  return state;
};

export default function App() {
  const { y } = useScroll();
  //스크롤의 높이가 100이상이 되면 글자의 색깔이 변함
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
    </div>
  );
}

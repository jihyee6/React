import { useEffect } from "react";
import "./styles.css";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    //페이지 위로 가면 발생 > 원래는 페이지 아래로도 벗어나면 이벤트가 발생했었음
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

export default function App() {
  const begforLife = () => console.log("plz dont leave");
  //팝업같은것을 사용하여 이 페이지 밖으로 마우스가 나가면 할인혜택같은 것을 줄 수
  //있게 할 수 있음
  useBeforeLeave(begforLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

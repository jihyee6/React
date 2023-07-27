import { useEffect, useRef, useState } from "react";
import "./styles.css";

const useFullScreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };

  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
        //fullscreen으로 보이는 명령어
      } else if (element.current.mozRequestFullscreen) {
        element.current.moxRequestFullscreen();
        //mozila
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
        //opera
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
        //microsoft
      }
    }
    runCb(true);
  };
  const exitFull = () => {
    document.exitFullscreen();
    //전체화면에서 빠져나옴
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};

export default function App() {
  const onFullS = (isFull) => {
    console.log(isFull ? "we are full" : "we are small");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullS);
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
        <button onClick={exitFull}>exit fullScreen</button>
      </div>
      <button onClick={triggerFull}>Make fullScreen</button>
    </div>
  );
}

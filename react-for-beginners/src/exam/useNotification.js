import { useEffect, useRef, useState } from "react";
import "./styles.css";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          //notification 보여줌
          new Notification(title, options);
        } else {
          //user가 그를 알아봐주길 바라지 않음
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};
export default function App() {
  const triggerNotif = useNotification("can i steal your gold", {
    body: "i love money"
  });

  return (
    <div className="App">
      <button onClick={triggerNotif}>hi</button>
    </div>
  );
}

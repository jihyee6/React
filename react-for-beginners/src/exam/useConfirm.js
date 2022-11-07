import { useEffect, useRef, useState } from "react";
import "./styles.css";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm && typeof onConfirm !== "function") {
    return;
  }
  if (!onCancel && typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm(0);
      //확인 클릭했을때
    } else {
      onCancel();
      //취소 클릭했을때
    }
  };
  return confirmAction;
};

export default function App() {
  const deleteWorld = () => console.log("Deleting the world");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}

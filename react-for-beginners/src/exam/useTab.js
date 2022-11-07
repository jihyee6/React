import { useState } from "react";
import "./styles.css";

const content = [
  {
    tab: "section 1",
    content: "i'm the content of the section 1"
  },
  {
    tab: "section 2",
    content: "i'm the content of the section 2"
  }
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem : setCurrentIndex
  };
};

export default function App() {
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div className="App">
      <h1>Hello </h1>
      {content.map((section, index) => (
        <button onClick={()=> changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

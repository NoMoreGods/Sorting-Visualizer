import React from "react";
import "./styles/SortingVisualizer.scss";
import { Toolbar } from "./Toolbar/Toolbar";

export const SortingVisualizer = () => {
  const [numberOfBars, setNumberOfBars] = React.useState(25);
  const [array, setArray] = React.useState([]);
  const [res, setres] = React.useState(false);
  const [sortedArray, setSortedArray] = React.useState([]);

  React.useEffect(() => {
    restart();
    setSortedArray([...array.slice().sort((a, b) => a - b)]);
  }, [res, numberOfBars]);

  function restart() {
    setArray(createArray(numberOfBars));
  }
  function generateRandomNum(min = 50, max = 500) {
    return Math.floor(min + Math.random() * (max - min));
  }
  function createArray(numberOfBars) {
    let result = [];
    while (result.length < numberOfBars) {
      result.push(generateRandomNum());
    }
    return result;
  }

  return (
    <div className="wrapper">
      <Toolbar
        setres={setres}
        setNumberOfBars={setNumberOfBars}
        numberOfBars={numberOfBars}
      />

      <div className="array">
        {array.map((value, id) => {
          return (
            <div
              key={id}
              className="node"
              style={{
                height: `${value}px`,
              }}
            >
              {value}
            </div>
          );
        })}
      </div>
      <div className="">
        <div className="color1">Main</div>
        <div className="color2">Comparing</div>
        <div className="color3">color-inPlace</div>
        <div className="color4">finished_successfully</div>
        <div className="color5">finished_successfully</div>
      </div>
    </div>
  );
};

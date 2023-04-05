import React from "react";
import "./SortingVisualizer.css";
import { Toolbar } from "./Toolbar/Toolbar";

export const SortingVisualizer = () => {
  const [array, setArray] = React.useState([]);
  const [res, setres] = React.useState(false);
  const [sortedArray, setSortedArray] = React.useState([]);

  React.useEffect(() => {
    restart();
    setSortedArray([array.slice().sort((a, b) => a - b)]);
  }, [res]);

  function restart() {
    setArray(createArray(50));
  }

  // Change this value for the speed of the animations.
  const ANIMATION_SPEED_MS = 1;

  // Change this value for the number of bars (value) in the array.
  const NUMBER_OF_ARRAY_BARS = 50;

  // This is the main color of the array bars.
  const PRIMARY_COLOR = "turquoise";

  // This is the color of array bars that are being compared throughout the animations.
  const SECONDARY_COLOR = "red";

  function generateRandomNum(min = 5, max = 600) {
    return Math.floor(min + Math.random() * (max - min));
  }
  function createArray(NUMBER_OF_ARRAY_BARS) {
    let result = [];
    while (result.length < NUMBER_OF_ARRAY_BARS) {
      result.push(generateRandomNum());
    }
    return result;
  }

  // function bubbleSortAnimations(array) {
  //   const animations = array.slice();
  //   for (let i = 0; i < animations.length; i++) {
  //     for (let j = 0; j < animations.length - i - 1; j++) {
  //       if (animations[j] > animations[j + 1]) {
  //         [animations[j], animations[j + 1]] = [
  //           animations[j + 1],
  //           animations[j],
  //         ];
  //       }
  //     }
  //   }
  //   return animations;
  // }

  return (
    <div>
      <Toolbar setres={setres} />

      <div className="array">
        {array.map((value, id) => {
          return (
            <div key={id} className="node" style={{ height: `${value}px` }}>
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

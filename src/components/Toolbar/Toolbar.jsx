import React from "react";
import { bubbleSort } from "../../utils/bubbleSort";
import "./Toolbar.css";

export const Toolbar = ({ array }) => {
  return (
    <div className="toolbar">
      <div className="generateArray">Generate new Array</div>
      <div className="arraySize">Change Array Size & Sorting Speed</div>
      <div className="algo">
        <div className="mergeSort">Merge Sort</div>
        <div className="quickSort">Quick Sort</div>
        <div className="heapSort">Heap Sort</div>
        <div className="bubbleSort">Bubble Sort</div>
      </div>
      <div
        className="sort"
        onClick={() => {
          console.log(array);
        }}
      >
        Sort!
      </div>
    </div>
  );
};

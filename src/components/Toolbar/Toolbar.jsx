import React from "react";
import { bubbleSort } from "../../utils/bubbleSort";

import "./Toolbar.css";
import { insertionSort } from "../../utils/insertionSort";
import { selectionSort } from "../../utils/selectionSort";
import { quickSortStarter } from "../../utils/quickSort";

export const Toolbar = ({ setres }) => {
  return (
    <div className="toolbar">
      <button
        className="generateArray"
        onClick={() => {
          setres((old) => {
            return !old;
          });
        }}
      >
        Generate new Array
      </button>
      <div className="arraySize">Change Array Size & Sorting Speed</div>
      <div className="algo">
        <button className="mergeSort">Merge Sort</button>
        <button
          className="quickSort"
          onClick={() => {
            quickSortStarter();
          }}
        >
          Quick Sort
        </button>
        <button className="heapSort">Heap Sort</button>
        <button
          className="insertionSort"
          onClick={() => {
            insertionSort();
          }}
        >
          Insertion Sort
        </button>
        <button
          className="selectionSort"
          onClick={() => {
            selectionSort();
          }}
        >
          Selection Sort
        </button>
        <button
          className="bubbleSort"
          onClick={() => {
            bubbleSort();
          }}
        >
          Bubble Sort
        </button>
      </div>
      <button className="sort">Sort!</button>
    </div>
  );
};

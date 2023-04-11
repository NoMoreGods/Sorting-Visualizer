import React from "react";
import { bubbleSort } from "../../utils/bubbleSort";

import "./Toolbar.css";
import { insertionSort } from "../../utils/insertionSort";
import { selectionSort } from "../../utils/selectionSort";
import { quickSortStarter } from "../../utils/quickSort";
import { mergeSortStarter } from "../../utils/mergeSort";
import { heapSortStarter } from "../../utils/heapSort";

export const Toolbar = ({ setres, setNumberOfBars, numberOfBars }) => {
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

      <div className="arraySize">
        <input
          type="range"
          onChange={(e) => {
            setNumberOfBars(e.target.value);
          }}
          min={10}
          max={50}
          step={1}
          value={numberOfBars}
          name="bars"
          id=""
        />
        <label htmlFor="">Change Array Size & Sorting Speed</label>
      </div>
      <div className="algo">
        <button
          className="mergeSort"
          onClick={() => {
            mergeSortStarter();
          }}
        >
          Merge Sort
        </button>
        <button
          className="quickSort"
          onClick={() => {
            quickSortStarter();
          }}
        >
          Quick Sort
        </button>
        <button
          className="heapSort"
          onClick={() => {
            heapSortStarter();
          }}
        >
          Heap Sort
        </button>
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

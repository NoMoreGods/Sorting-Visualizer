import React from 'react';
import '../styles/Toolbar.scss';
import { bubbleSort } from '../../utils/sortTypes/bubbleSort';
import { insertionSortStarter } from '../../utils/sortTypes/insertionSort';
import { selectionSortStarter } from '../../utils/sortTypes/selectionSort';
import { quickSortStarter } from '../../utils/sortTypes/quickSort';
import { mergeSortStarter } from '../../utils/sortTypes/mergeSort';
import { heapSortStarter } from '../../utils/sortTypes/heapSort';

export const Toolbar = ({ setRes, setNumberOfBars, numberOfBars }) => {
  return (
    <div className="toolbar">
      <button
        className="generateArray"
        onClick={() => {
          setRes((old) => !old);
        }}>
        Generate new Array
      </button>

      <div className="array-size">
        <label>Change Array Size & Sorting Speed</label>
        <input
          type="range"
          onChange={(e) => {
            setNumberOfBars(e.target.value);
          }}
          min={10}
          max={40}
          step={1}
          value={numberOfBars}
          name="bars"
          id=""
        />
      </div>

      <div className="algo-box">
        <button
          className="mergeSort"
          onClick={() => {
            mergeSortStarter();
          }}>
          Merge Sort
        </button>
        <button
          className="quickSort"
          onClick={() => {
            quickSortStarter();
          }}>
          Quick Sort
        </button>
        <button
          className="heapSort"
          onClick={() => {
            heapSortStarter();
          }}>
          Heap Sort
        </button>
        <button
          className="insertionSort"
          onClick={() => {
            insertionSortStarter();
          }}>
          Insertion Sort
        </button>
        <button
          className="selectionSort"
          onClick={() => {
            selectionSortStarter();
          }}>
          Selection Sort
        </button>
        <button
          className="bubbleSort"
          onClick={() => {
            bubbleSort();
          }}>
          Bubble Sort
        </button>

        <button className="sort">Sort!</button>
      </div>
    </div>
  );
};

import { swap } from '../swap';
export function heapSortStarter() {
  let ele = document.querySelectorAll('.node');
  heapSort(ele);
}
function heapSort(arr) {
  let N = arr.length;

  // Build heap (rearrange array)
  for (let i = Math.floor(N / 2) - 1; i >= 0; i--) heapify(arr, N, i);

  // One by one extract an element from heap
  for (let i = N - 1; i > 0; i--) {
    // Move current root to end
    swap(arr[0], arr[i]);
    // call max heapify on the reduced heap
    heapify(arr, i, 0);
  }
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(arr, N, i) {
  let largest = i; // Initialize largest as root
  let l = 2 * i + 1; // left = 2*i + 1
  let r = 2 * i + 2; // right = 2*i + 2

  // If left child is larger than root
  if (l < N && arr[l] > arr[largest]) largest = l;

  // If right child is larger than largest so far
  if (r < N && arr[r] > arr[largest]) largest = r;

  // If largest is not root
  if (largest != i) {
    swap(arr[i], arr[largest]);

    // Recursively heapify the affected sub-tree
    heapify(arr, N, largest);
  }
}

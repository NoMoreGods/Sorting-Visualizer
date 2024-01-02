import { swap } from '../swap';
import { delay } from '../delay';
import { compare } from '../compare';

export async function insertionSortStarter() {
  const ele = document.querySelectorAll('.node');
  await insertionSort(ele);
  await compare(ele);
}

async function insertionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let j = i;
    while (j >= 0 && parseInt(array[j].style.height) > parseInt(array[j + 1].style.height)) {
      swap(array[j + 1], array[j]);
      j = j - 1;
      await delay(50);
    }
  }
}

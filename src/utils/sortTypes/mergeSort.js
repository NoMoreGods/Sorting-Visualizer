import { delay } from '../delay';
import { comparingColor1, comparingColor2, inPlaceColor, sortedColor } from '../rgb';

export async function mergeSortStarter() {
  let ele = document.querySelectorAll('.node');
  let l = 0;
  let r = parseInt(ele.length) - 1;
  await mergeSort(ele, l, r);
}

async function merge(ele, low, mid, high) {
  const n1 = mid - low + 1;
  const n2 = high - mid;
  let left = new Array(n1);
  let right = new Array(n2);

  for (let i = 0; i < n1; i++) {
    await delay(50);
    // color
    ele[low + i].style.background = comparingColor1;
    left[i] = ele[low + i].style.height;
  }
  for (let i = 0; i < n2; i++) {
    await delay(50);
    // color
    ele[mid + 1 + i].style.background = comparingColor2;
    right[i] = ele[mid + 1 + i].style.height;
  }
  await delay(50);
  let i = 0,
    j = 0,
    k = low;
  while (i < n1 && j < n2) {
    await delay(50);
    // To add color for which two r being compared for merging
    if (parseInt(left[i]) <= parseInt(right[j])) {
      // color
      if (n1 + n2 === ele.length) {
        ele[k].style.background = sortedColor;
      } else {
        ele[k].style.background = inPlaceColor;
      }

      ele[k].style.height = left[i];

      ele[k].innerText = parseInt(left[i]);
      i++;
      k++;
    } else {
      // color
      if (n1 + n2 === ele.length) {
        ele[k].style.background = sortedColor;
      } else {
        ele[k].style.background = inPlaceColor;
      }
      ele[k].style.height = right[j];
      ele[k].innerText = parseInt(right[j]);
      j++;
      k++;
    }
  }
  while (i < n1) {
    await delay(50);
    // color
    if (n1 + n2 === ele.length) {
      ele[k].style.background = sortedColor;
    } else {
      ele[k].style.background = inPlaceColor;
    }
    ele[k].style.height = left[i];
    ele[k].innerText = parseInt(left[i]);
    i++;
    k++;
  }
  while (j < n2) {
    await delay(50);
    // color
    if (n1 + n2 === ele.length) {
      ele[k].style.background = sortedColor;
    } else {
      ele[k].style.background = inPlaceColor;
    }
    ele[k].style.height = right[j];
    ele[k].innerText = parseInt(right[j]);
    j++;
    k++;
  }
}

async function mergeSort(ele, l, r) {
  if (l >= r) {
    return;
  }
  const m = l + Math.floor((r - l) / 2);
  await mergeSort(ele, l, m);
  await mergeSort(ele, m + 1, r);
  await merge(ele, l, m, r);
}

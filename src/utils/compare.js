import { sortedColor } from './rgb';
import { delay } from './delay';

export async function compare(currentNodeList) {
  const currentArray = [];
  currentNodeList.forEach((el) => currentArray.push(parseInt(el.style.height)));
  const sortedArray = currentArray.slice().sort((a, b) => a - b);

  for (let i = 0; i < currentArray.length; i++) {
    if (sortedArray[i] === currentArray[i]) {
      currentNodeList[i].style.background = sortedColor;
      await delay(50);
    }
  }
}

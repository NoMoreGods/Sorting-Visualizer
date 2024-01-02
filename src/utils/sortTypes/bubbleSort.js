import { swap } from '../swap';
import { delay } from '../delay';
import { comparingColor1, comparingColor2, inPlaceColor, sortedColor } from '../rgb';

export async function bubbleSort() {
  const ele = document.querySelectorAll('.node');
  for (let i = 0; i < ele.length - 1; i++) {
    for (let j = 0; j < ele.length - i - 1; j++) {
      ele[j].style.background = comparingColor1;
      ele[j + 1].style.background = comparingColor2;
      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        await delay(70);
        swap(ele[j], ele[j + 1]);
      }
      ele[j].style.background = inPlaceColor;
      ele[j + 1].style.background = inPlaceColor;
    }
    ele[ele.length - 1 - i].style.background = sortedColor;
  }
  ele[0].style.background = sortedColor;
}

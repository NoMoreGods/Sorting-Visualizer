import { swap } from '../swap';
import { delay } from '../delay';
import { compare } from '../compare';
import { comparingColor1, comparingColor2, inPlaceColor, sortedColor } from '../rgb';

export async function selectionSortStarter() {
  const ele = document.querySelectorAll('.node');

  await selectionSort(ele);
  await compare(ele);
}

async function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      // тут нужно добавить анимацию для того, чтоб показать какой столбец выделен. Сейчас это не понятно
      array[j].style.background = 'white';
      await delay(50);
      array[j].style.background = comparingColor1;
      array[i].style.background = inPlaceColor;
      await delay(20);
      if (parseInt(array[j].style.height) < parseInt(array[min].style.height)) {
        min = j;
      }
    }
    if (min !== i) {
      swap(array[i], array[min]);
      await delay(20);
    }
  }
}

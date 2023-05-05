import {comparingColor1,comparingColor2, inPlaceColor, sortedColor} from './rgb'

export function swap(el1, el2) {
	let temp = el1.style.height;
	el1.style.background = comparingColor1;
	el1.style.height = el2.style.height;
	el1.innerText = parseInt(el2.style.height);
	el2.style.background = comparingColor2;
	el2.style.height = temp;
	el2.innerText = parseInt(temp);
}
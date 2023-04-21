import { swap } from "./swap";
import { delay } from "./delay";
import {comparingColor1,comparingColor2, inPlaceColor, sortedColor} from './rgb'


export async function insertionSort() {

	const array = document.querySelectorAll(".node");
	for (let i = 0; i < array.length; i++) {
		let j = i;
		while ((j >= 0) && ( parseInt(array[j].style.height) > parseInt(array[j+1].style.height))) {
			array[j + 1].style.background = rgb(255,207,167);
			array[j].style.background = rgb(250,147,151);
			swap(array[j+1], array[j])
			j = j - 1;
			await delay(50);
		}
	}
}

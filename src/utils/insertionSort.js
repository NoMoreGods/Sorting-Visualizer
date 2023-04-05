import { swap } from "./swap";
import { delay } from "./delay";


export async function insertionSort() {

	const array = document.querySelectorAll(".node");
	for (let i = 0; i < array.length; i++) {
		let j = i;
		while ((j >= 0) && ( parseInt(array[j].style.height) > parseInt(array[j+1].style.height))) {
			array[j + 1].style.background = "blue";
			array[j].style.background = "blue";
			swap(array[j+1], array[j])
			j = j - 1;
			await delay(20);
		}
	}
}

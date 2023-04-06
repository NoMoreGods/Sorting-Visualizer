import { swap } from "./swap";
import { delay } from "./delay";


export async function selectionSort (){
	
	const array = document.querySelectorAll(".node");

	for (let i = 0; i < array.length; i++) {
		let min = i;
		for (let j = i+1; j < array.length; j++) {
			array[j].style.background = 'blue';
			array[i].style.background = 'blue';
			await delay(20);
			if (parseInt(array[j].style.height) < parseInt(array[min].style.height)) {min = j};
		
		}
		if (min !== i){
			await delay(20);
			swap(array[i], array[min])
		}
	}
	
}



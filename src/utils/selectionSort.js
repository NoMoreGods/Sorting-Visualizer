export async function selectionSort (){
	console.log('In select()');
	const array = document.querySelectorAll(".node");

	for (let i = 0; i < array.length; i++) {
		console.log('In ith loop');
		let min = i;
		for (let j = i+1; j < array.length; j++) {
			console.log('In jth loop');
			array[j].style.background = 'blue';
			array[i].style.background = 'blue';
			if (parseInt(array[j].style.height) < parseInt(array[min].style.height)) {min = j};
		}
		if (min !== i){
			await waitforme(20);
			swap(array[i], array[min])
		}
	}
	
}

function swap(el1, el2) {
	console.log('In swap()');
	let temp = el1.style.height;
	el1.style.height = el2.style.height;
	el2.style.height = temp;
}

function waitforme(milisec) { 
	return new Promise(resolve => { 
			setTimeout(() => { resolve('') }, milisec); 
	}) 
}

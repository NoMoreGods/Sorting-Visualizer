export async function insertionSort() {
	const array = document.querySelectorAll(".node");
	console.log('In insert()');
	for (let i = 1; i < array.length; i++) {
		console.log('In i loop())');
		let current = array[i];
		let j = i - 1;
		while ((j > -1) && (parseInt(current.style.height) < parseInt(array[j].style.height))) {
			console.log('In while loop()');
			array[j + 1].style.background = "blue";
			array[j].style.background = "blue";
			await waitforme(20);
			array[j + 1].style.height = array[j].style.height;
			j--;
		}
		array[j + 1].style.height = current.style.height
	}
}


function waitforme(milisec) {
	return new Promise(resolve => {
		setTimeout(() => { resolve('') }, milisec);
	})
}

export  async function bubbleSort() {
	console.log('In bubbe()');
	const ele = document.querySelectorAll(".node");
	for (let i = 0; i < ele.length - 1; i++) {
		console.log('In ith loop');
		for (let j = 0; j < ele.length - i - 1; j++) {
			console.log('In jth loop');
			ele[j].style.background = 'blue';
			ele[j + 1].style.background = 'blue';
			if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
				console.log('In if condition');
				await waitforme(10);
				swap(ele[j], ele[j + 1]);
			}
			ele[j].style.background = 'cyan';
			ele[j + 1].style.background = 'cyan';
		}
		ele[ele.length - 1 - i].style.background = 'green';
	}
	ele[0].style.background = 'green';
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

// const bubSortbtn = document.querySelector(".bubbleSort");
// bubSortbtn.addEventListener('click', async function () {
// 	disableSortingBtn();
// 	disableSizeSlider();
// 	disableNewArrayBtn();
// 	await bubble();
// 	enableSortingBtn();
// 	enableSizeSlider();
// 	enableNewArrayBtn();
// });
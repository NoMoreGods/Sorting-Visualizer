import { swap } from "./swap";
import { delay } from "./delay";


export async function quickSortStarter(){
  let ele = document.querySelectorAll('.node');
  let l = 0;
  let r = ele.length - 1;
 
  await quickSort(ele, l, r);
};


async function quickSort(ele, l, r){
  console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));
  if(l < r){
      let pivot_index = await partitionLomuto(ele, l, r);
      await quickSort(ele, l, pivot_index - 1);
      await quickSort(ele, pivot_index + 1, r);
  }
  else{
      if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
          ele[r].style.background = 'green';
          ele[l].style.background = 'green';
      }
  }
}


async function partitionLomuto(ele, l, r){
  let i = l - 1;
  // color pivot element
  ele[r].style.background = 'red';
  for(let j = l; j <= r - 1; j++){
      // color current element
      ele[j].style.background = 'yellow';
      // pauseChamp
      await delay(20);

      if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
          i++;
          swap(ele[i], ele[j]);
          // color 
          ele[i].style.background = 'orange';
          if(i != j) ele[j].style.background = 'orange';
          // pauseChamp
          await delay(20);
      }
      else{
          // color if not less than pivot
          ele[j].style.background = 'pink';
      }
  }
  i++; 
  // pauseChamp
  await delay(20);
  swap(ele[i], ele[r]); // pivot height one
  // color
  ele[r].style.background = 'pink';
  ele[i].style.background = 'green';

  // pauseChamp
  await delay(20);
  
  // color
  for(let k = 0; k < ele.length; k++){
      if(ele[k].style.background != 'green')
          ele[k].style.background = 'cyan';
  }

  return i;
}
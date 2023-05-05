import { swap } from "./swap";
import { delay } from "./delay";
import { compare } from "./compare";
import {comparingColor1,comparingColor2, inPlaceColor, sortedColor} from './rgb'

export async function quickSortStarter(){
  const ele = document.querySelectorAll('.node');
  let l = 0;
  let r = ele.length - 1;

  await quickSort(ele, l, r);
  await compare(ele)
};


async function quickSort(ele, l, r){
  if(l < r){
      let pivot_index = await partitionLomuto(ele, l, r);
      await quickSort(ele, l, pivot_index - 1);
      await quickSort(ele, pivot_index + 1, r);
  }
  else{
      if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
          ele[r].style.background = comparingColor1;
          ele[l].style.background = comparingColor2;
      }
  }
}


async function partitionLomuto(ele, l, r){
  let i = l - 1;
  // color pivot element
  ele[r].style.background = "red";
  for(let j = l; j <= r - 1; j++){
    //   color current element
      ele[j].style.background = "white";
      // delay
      await delay(50);

      if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
          i++;
          swap(ele[i], ele[j]);
          // color 
        //   ele[i].style.background = "pink";
        //   if(i != j) ele[j].style.background = "yellow";
          // delay
          await delay(50);
      }
      else{
        //   color if not less than pivot
          ele[j].style.background = inPlaceColor;
      }
  }
  i++; 
  // delay
  await delay(50);
  swap(ele[i], ele[r]); // pivot height one
  // color
//   ele[r].style.background = 'pink';
//   ele[i].style.background = inPlaceColor;

  // delay
  await delay(50);
  
  // color
//   for(let k = 0; k < ele.length; k++){
//       if(ele[k].style.background != inPlaceColor)
//           ele[k].style.background = inPlaceColor;
//   }

  return i;
}
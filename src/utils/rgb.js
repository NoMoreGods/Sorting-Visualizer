export function rgb(r,g,b) {
	return 'rgb(' + [(r||0),(g||0),(b||0)].join(',') + ')';
}

const defaultColor= rgb(250,147,151);
const comparingColor1 = rgb(255,207,167); 
const comparingColor2 = rgb(253,255,186); 
const inPlaceColor = rgb(192,255,194); 
const sortedColor = rgb(138,174,146); 

export {defaultColor, comparingColor1,comparingColor2, inPlaceColor, sortedColor}




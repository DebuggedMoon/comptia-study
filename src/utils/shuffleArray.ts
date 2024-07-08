/*
	The de-facto unbiased shuffle algorithm, Fisher–Yates (aka Knuth) Shuffle.
*/
function shuffleArrayInPlace(array: any[]) {
	let currentIndex = array.length;
  
	// While there remain elements to shuffle...
	while (currentIndex != 0) {
  
	  // Pick a remaining element...
	  let randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;
  
	  // And swap it with the current element.
	  [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}
  }

export default shuffleArrayInPlace;
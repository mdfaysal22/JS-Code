function points(twoPointers, threePointers) {

	let twoPointersCount = twoPointers * 2;

	let threePointersCount = threePointers * 3;

	let finalPoint = twoPointersCount + threePointersCount;

	return finalPoint;

}



console.log(points(7, 5));
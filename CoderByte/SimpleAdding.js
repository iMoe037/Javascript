function SimpleAdding(num) {

	// code goes here
	var sum = 0;
	for (var i = 0; i < num; num--) {
		sum += num;
	}
	num = sum;
	console.log(sum);
	return num;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleAdding(readline());
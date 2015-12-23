function FirstFactorial(num) { 

  // code goes here

 /* A simiple for loop that starts at the value of num
  *As long as num is greater than 1. num will be multiplied
  *by the value of i -1. For example if num is 4, during the 
  *first iteration num is assigned num * 3. After the for 
  *loop terminates the value of num is returned.
  */

  for(var i = num; i>1; i--){
    num*=(i-1);
    }
  return num; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());

//*************************First Factorial with Recursion*************************

var factorial = 1;

function FirstFactorial(num){

	while(num>=1){

		factorial*=num;
		return FirstFactorial(num -1)

	}

	num = factorial;
	return num;
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());
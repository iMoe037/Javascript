function FirstReverse(str) { 

  // code goes here
//Split the string into an array
 	var toArray = str.split('');
//Asign the array to itself but reversed
	 toArray = toArray.reverse();
//Assign str to the reversed array casted as a string
	 str = toArray.join('');
 
   return str;
}

   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());                            



function CheckNums(num1,num2) { 

  // code goes here
  //Beware CoderByte is asking us to return the answers as STRINGS
  if(num2>num1){
  	return "true";
  } 
  else if(num1 === num2){
  	return "-1";
  }
  else{
  	return "false";
  }      
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
CheckNums(readline());
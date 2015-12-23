function LetterCapitalize(str) { 

  // code goes here 
  var strToArr = str.split('');
  strToArr[0]=strToArr[0].toUpperCase();

  for(var i =0; i<strToArr.length; i++){
  	if(strToArr[i]===" "){
  		strToArr[i+1]=strToArr[i+1].toUpperCase();
  	}
  }
  str = strToArr.join('');
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());
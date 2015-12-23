function ABCheck(str) { 

  // code goes here
  var strToArr = str.toLowerCase().split('');
  for(var i =0;i<strToArr.length;i++){
  	if(strToArr[i]==="a"){
  		if(strToArr[i-3]==='b'||strToArr[i+3]==='b'){
  			return true;
  		}
  	}
  }
  return false;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ABCheck(readline());
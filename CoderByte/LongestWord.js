function LongestWord(sen) { 

  // code goes here
  var longWord ="";
  var senToArr = sen.split(" ");
  for(var i = 0; i<senToArr.length; i++) {
    if(senToArr[i].length > longWord.length){
        longWord = senToArr[i];
        }
    }
    return longWord;        
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());
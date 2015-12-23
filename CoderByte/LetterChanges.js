function LetterChanges(str) {

  // code goes here
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  var strToArr = str.toLowerCase().split('');
  var incrementStr = "";
  var index = -1;

  for (var i = 0; i < strToArr.length; i++) {

    index = alphabet.indexOf(strToArr[i]);

    if (index !== -1) {
      if (alphabet[index + 1] === 'a' || alphabet[index + 1] === 'e' || alphabet[index + 1] === 'i' || alphabet[index + 1] === 'o' || alphabet[index + 1] === 'u') {
        incrementStr += alphabet[alphabet.indexOf(strToArr[i]) + 1].toUpperCase();
      } else {
        incrementStr += alphabet[alphabet.indexOf(strToArr[i]) + 1];
      }
    } else {
      incrementStr += strToArr[i];
    }
  }

  return incrementStr;
}


// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());
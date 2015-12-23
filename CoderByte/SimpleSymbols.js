function SimpleSymbols(str) {

	// code goes here
	var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
	var strToArr = str.toLowerCase().split('');
	var status = -false;

	for (var i = 0; i < strToArr.length; i++) { { debugger }
		if (alphabet.indexOf(strToArr[i]) !== -1) {
				if (strToArr[i - 1] === "+" && strToArr[i + 1] === "+") {
					status = true;
				} else {
					return false;
				}

			}

		}
		return status;

	}


	// keep this function call here 
	// to see how to enter arguments in JavaScript scroll down
	SimpleSymbols(readline());
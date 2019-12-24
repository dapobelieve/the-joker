var fs = require('fs');

var jokes = {}


jokes.allJokes = function () {

	// read text file containing jokes
	var fileContents = fs.readFileSync(__dirname+'/jokes.txt', 'utf8');

	// turns the string into an array
	var arryOfJokes = fileContents.split(/\r?\n/);

	//return array of jokes
	return arryOfJokes;
}


module.exports = jokes;
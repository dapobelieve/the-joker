var jokes = require('./lib/jokes');
var mathLib = require('./lib/math');


var app = {};


app.config = {
	'timeBetweenJokes': 3000
}

app.printJoke = function () {
	var allJokes = jokes.allJokes();

	var numberOfJokes = allJokes.length;

	var randomNumber = mathLib.getRandomNumber(1, (numberOfJokes - 1));

	var selectedJoke = allJokes[randomNumber];

	console.log(selectedJoke);

}

app.indefiniteLoop = function () {
	setInterval(app.printJoke, app.config.timeBetweenJokes);
}

app.indefiniteLoop();
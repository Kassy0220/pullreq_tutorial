var sortNumber = function (number) {
	number.sort(function (a, b) {
		if (a == b) {
			return 0;
		}
		return a < b ? -1 : 1;
	});
};

// This is the first comment
// This is the second comment
// This is the third comment

var number = [19, 3, 81, 1, 24, 21];
sortNumber(number);
console.log(number);


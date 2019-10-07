var fizzBuzz = function(target) {
	for (let index = 1; index <= target; index++) {
		var print = (index % 3 == 0 && index % 5 == 0) ? "FizzBuzz"
			: index % 3 == 0 ? "Fizz"
			: index % 5 == 0 ? "Buzz"
			: index;
		console.log(print);
	}
}
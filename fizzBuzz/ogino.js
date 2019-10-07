var num = 50;

for (let i = 1; i <= num; i++) {
    var fizz = (i % 3 == 0) ? "Fizz" : "";
    var buzz = (i % 5 == 0) ? "Buzz" : "";
    var result = (fizz || buzz) ? fizz + buzz : i;
    console.log(result);
}
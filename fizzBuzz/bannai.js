
for(var i = 1 ; i < 51 ; i++){
    var result = ((i%3 == 0 ? ((i%5 == 0)? "fizzbuzz" : "fizz") : (i%5==0) ? "buzz" : i));
    console.log(result);
  }
  
  
  var result;
  for(var i = 1 ; i < 51 ; i++){
    if(i%3 == 0 && i%5 == 0){
      result = "fizzbuzz";
    }
    else if(i%3 == 0){
      result = "fizz";
    }
    else if (i%5 == 0){
      result = "buzz";
    }
    else{
      result = i;
    }
    console.log(result);
  }
  
  var result;
  
  for(var i = 1; i < 51; i++){
  
    result = (i%3==0)? "fizz":(i%5==0)? "buzz":i;
  
    console.log(result);
  }
{
    // bestFood’s TDZ starts and ends here
    console.log(bestFood); // returns undefined because bestFood’s TDZ does not exist here
    var bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ does not exist here
    console.log(bestFood); // returns "Vegetable Fried Rice" because bestFood’s TDZ does not exist here
    // bestFood’s TDZ does not exist here
    // bestFood’s TDZ does not exist here
  }
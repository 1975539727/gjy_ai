{
    // TDZ starts here (at the beginning of this block’s local scope)
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    let bestFood; // bestFood’s TDZ ends here
    console.log(bestFood); // returns undefined because bestFood’s TDZ does not exist here
    bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ does not exist here
    console.log(bestFood); // returns "Vegetable Fried Rice" because bestFood’s TDZ does not exist here
  }
  
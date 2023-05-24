//task-E tub sonni topish
function tubSonmi(num) {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  const test = tubSonmi(10);
  console.log(test);
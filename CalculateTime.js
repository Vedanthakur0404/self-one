function calculateSumTime(n) {
    // Record the start time
    const startTime = new Date().getTime();
  
    // Calculate the sum from 1 to n
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  
    // Record the end time
    const endTime = new Date().getTime();
  
    // Calculate the elapsed time in seconds
    const elapsedTimeInSeconds = (endTime - startTime) / 1000;
  
    // Return the sum and the time it took
    return {
      sum,
      elapsedTimeInSeconds,
    };
  }
  
  // Test cases
  console.log(calculateSumTime(100));
  console.log(calculateSumTime(100000));
  console.log(calculateSumTime(1000000000));
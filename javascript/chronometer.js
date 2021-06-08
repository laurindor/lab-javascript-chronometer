class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    
    this.intervalId = setInterval(() => {
    if (callback) callback();
    this.currentTime += 1;
    }, 1000)
  }
   
  //return currentTime += 1


  getMinutes() {

    return Math.floor(this.currentTime>60) 

  }



  getSeconds() {

    return Math.floor(this.currentTime>60) 

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    
    Chronometer.this.currentTime = 0; 
  
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

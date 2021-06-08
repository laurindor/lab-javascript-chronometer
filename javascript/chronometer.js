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

   let minutes = Math.floor(this.currentTime>60);
  
   return minutes;

  }



  getSeconds() {

  let seconds = Math.floor(this.currentTime>60); 
  return seconds;


  }

  computeTwoDigitNumber(value)  {

    return (this.currentTime < 10 ? '0' : '') + this.currentTime
   
 }

  stop() {
    
  }

  reset() {
    
   
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

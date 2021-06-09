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

    if(value < 10) {
      return "0" + String(value);
    } else {
      return value.toString();
    }

    }

    return (this.currentTime < 10 ? '0' : '') + this.currentTime
   
 }

  stop() { 
    clearInterval(this.intervalId);
  
  

    
  }

  reset() {
  this.currentTime = 0;   
   
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());

    return ${minutes} ${seconds}
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

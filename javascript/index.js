const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  setInterval(() => {
    const seconds = printSeconds();
    const minutes = printMinutes();
  
   console.log ("tick", minutes, seconds); 
   //this is not necessary, just checking if it works 

   minDecElement.innerTextL = minutes[0]
   minUniElement.innerTextL = minutes[1]
   secDecElement.innerTextL = seconds[0]
   secUniElement.innerTextL = seconds[1];
 }, 1000);
}
   


function printMinutes() {
  return chronometer.computeTwoDigitNumber(chronometer.getMinutes());
}

function printSeconds() {

  return chronometer.computeTwoDigitNumber(chronometer.getSeconds());
}

// ==> BONUS
function printMilliseconds() {

  //get the string with text
const timeMark = chronometer.split(); 

//create the <li></li> element to print
const newLi = document.createElement("li");

//Set the text to the time string
newLi.innerText = timeMark;

//append it to the DOM
splitsElement.appendChild(newLi);
}

function printSplit() {
 
}

function clearSplits() {
    splitsElement.innerHTML = "";

 // splitsElement.removeChildren();
 
}


function setStopBtn() {
  btnLeftElement.innerText = "Stop"
  btnLeftElement.
 
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === "start") {

    setStopBtn();
    setSplitBtn();
    chronometer.start();
    printTime();

  } else if (btnLeftElement.innerText === "stop") {

    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }

  }); 


// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innertext === "reset") {
    chronometer.stop();
    chronometer.reset();

    secUniElement.innerText = "0";
    secDe




  }



});

//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/cat1.jpg') {
		myImage.setAttribute ('src', 'images/cat2.jpg');
	} else {
      myImage.setAttribute ('images/cat1.jpg');
    }

};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myButton.onclick = function() {
  setUserName();
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello ' + storedName;
}

function setUserName() {
	
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello ' + myName;
}
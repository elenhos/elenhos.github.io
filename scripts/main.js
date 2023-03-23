var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/photo1.png') {
      myImage.setAttribute ('src','images/photo2.png');
    } 
    else if(mySrc === 'images/photo2.png'){
    myImage.setAttribute ('src','images/photo3.png');
    } 
    else if(mySrc === 'images/photo3.png'){
    myImage.setAttribute ('src','images/photo4.png');
    }
    else if(mySrc === 'images/photo4.png'){
    myImage.setAttribute ('src','images/photo5.png');
    }
	 else if(mySrc === 'images/photo5.png'){
    myImage.setAttribute ('src','images/photo6.png');
    }
    else {
      myImage.setAttribute ('src','images/photo1.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Хорошего дня, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Хорошего дня, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
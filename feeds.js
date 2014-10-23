//feeds.js
//document.body.onload = pushFeedsIntoMemory;

createFeed

function createFeed(feedsText) { 
  // create a new div element 
  // and give it some content 
  alert(feedsText.value);
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode("Hi there and greetings!"); 
  newDiv.appendChild(newContent); //add the text node to the newly created div. 

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
}

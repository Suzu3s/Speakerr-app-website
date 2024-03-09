// function toggleTheme() {
//     const body = document.body;
//     body.classList.toggle('dark');
//   }

// //When the user clicks the "Toggle Theme" button, the toggleTheme function will be called, which toggles the dark class on the body element. The CSS styles for the body.dark selector will be applied when the dark class is present, which changes the background color and text color to a dark theme./  

// to make transitions from left, right and bottom

// Wait for 2 seconds before moving the div element into view
setTimeout(function() {
  var myDiv = document.getElementById("myDiv");
  myDiv.style.left = "0"; // Move the element to the left
}, 3000);

setTimeout(function() {
  var myDiv = document.getElementById("myDiv1");
  myDiv.style.top = "0"; // Move the element to the bottom
}, 3000);

setTimeout(function() {
  var myDiv = document.getElementById("myDiv2");
  myDiv.style.right = "0"; // Move the element to the left
}, 3000);




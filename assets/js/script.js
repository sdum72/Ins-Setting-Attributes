// TODO: Access multiple elements using .querySelectorAll()
 var divTags = document.querySelectorAll("div");
 var pTags = document.querySelectorAll("p");
 var imgEl = document.querySelectorAll("img");

// TODO: Access element by ID using .querySelector()
 var changeP = document.querySelector("#change2");
 changeP.style.fontSize = '20px';
 var lastP = document.getElementById('change2');
 lastP.style.backgroundColor = 'yellow';

// TODO: Sets first pTags to have a font-size of 40px
var firstPTag = document.querySelector("p");
console.log(firstPTag)
firstPTag.style.fontSize = '40px';

// TODO: Sets first hTags to have a font-size of 40px
var hTags = document.querySelector("h1");
hTags.style.color = 'red';






























//  pTags[0].setAttribute("style", "font-size: 40px;");

// // Sets changeP to have multiple style attributes
//  changeP.setAttribute("style", "font-size: 25px; font-weight: bold; text-decoration:underline; ");

//  // Sets image source of the first image
//  imgEl[0].setAttribute("src", "./assets/images/image_1.png");

// // Adds size and width styling to image
//  imgEl[0].setAttribute("style", "width:50%");

// // Loops through divTags to set each one to have the color blue and the font size of 30px
// for (var i = 0; i < divTags.length; i++) {
//   divTags[i].setAttribute("style", "color:blue; font-size: 30px");
//  }

 

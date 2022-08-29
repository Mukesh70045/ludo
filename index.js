var a = Math.random() * 6;
a = Math.floor(a) + 1;
var diceimage1 = "dice" + a + ".png";
var imagedice1 = "images/" + diceimage1;
var s1 = document.querySelectorAll("img")[0];
s1.setAttribute("src", imagedice1);

var b = Math.floor(Math.random() * 6) + 1;
var diceimage2 = "dice" + b + ".png";
var imagedice2 = "images/" + diceimage2;
var s2 = document.querySelectorAll("img")[1];
s2.setAttribute("src", imagedice2);

if (a > b) {
  document.querySelector("h1").innerHTML = "player 1 win ";
} else if (b > a) {
  document.querySelector("h1").innerHTML = "player 2 win ";
} else document.querySelector("h1").innerHTML = "Draw!";

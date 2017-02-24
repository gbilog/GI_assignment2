//ASSIGNMENT 2, PART 1: STRINGS AND STRING MANIPULATION
//NUMBER1
/*
var name = prompt ("What is your name?");
window.alert("Your name is "+name.length+ " characters long.");
*/

//NUMBER 2
/*
var name = prompt("What is your name?");
var number = prompt("pick a number from 1 to "+ name.length);
window.alert("The letter at position number "+number+" in your name is "+name.charAt(number - 1));
*/

//NUMBER 3
/*
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
window.alert("Your name is: "+firstName+" "+lastName);
*/

//NUMBER 4
/*
var sentence = "The quick brown fox jumps over the lazy dog";
window.alert(sentence.substr(16,3));
*/

//NUMBER 5
/*
var sentence = "The quick brown fox jumps over the lazy fox";
window.alert(sentence.lastIndexOf("fox"));
*/

//NUMBER 6
/*
var sentence = "The quick brown fox jumps over the lazy dog";
var firstName = window.prompt("What is your first name?");
var lastName = window.prompt("What is your last name?");

window.alert(sentence.replace("the lazy dog",firstName+" "+lastName));
*/

//NUMBER 7
/*
var sentence = "The quick brown fox jumps over the lazy dog";
var wordPick = window.prompt('Select a word from the phrase: '+sentence);
window.alert("That word is at index "+ sentence.search(wordPick));
*/

//NUMBER 8
/*
var old_string = "The quick brown fox jumps over the lazy dog";
var new_string = old_string.substr(-12);
window.alert(new_string);
*/

//NUMBER 9
/*
var sentence = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
var newSentence = sentence.toLowerCase();
window.alert(newSentence.trim());
*/

//NUMBER 10
/*
var sentence = "the quick brown fox jumps over the lazy dog";
var newSentence = sentence.replace(sentence.charAt(0),  sentence.charAt(0).toUpperCase());
window.alert(newSentence);
*/



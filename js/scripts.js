//$(function(){

var enterSentence = function (sentence, sentence2, length, firstLetter, answer){ alert (sentence + sentence2 + length + firstLetter + answer);};
var userSentence = prompt("Please enter a sentence");

var returnSentence = userSentence.charAt( 0).toUpperCase ()
  + userSentence.charAt(userSentence.length -1).toUpperCase ();

var returnSentenceReverse = userSentence.charAt(userSentence.length -1).toUpperCase ()
  + userSentence.charAt( 0).toUpperCase ();

  var length = " - there are " + userSentence.length / 2 + " chars in half of this sentence.";

  var firstLetter = userSentence.charAt(userSentence.length /2) + userSentence;

  var answer = reverse(userSentence);

enterSentence (returnSentence, returnSentenceReverse, length, firstLetter, answer);


//});

$(function(){



});

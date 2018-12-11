// begin defining the variables that I know //
// use id's //
let upperKeys = ("#keyboard-upper-container");
let lowerKeys = ("#keyboard-lower-container");
let sentences = [
  "ten ate neite ate nee enet ite ate inet ent eate",
  "Too ato too nOt enot one totA not anot tOO aNot",
  "oat itain oat tain nate eate tea anne inant nean",
  "itant eate anot eat nato inate eat anot tain eat",
  "nee ene ate ite tent tiet ent ine ene ete ene ate"
];
// using a variable of index counts,etc //
let sentenceIndex = 0;
let currentSentence = sentences[sentenceIndex];
// begin with a starting letter index placement of zero //
let letterPlace = 0;
// find a way to define what a "letter" and its string of "currentSentence". let currentSentence have a string by using substring and parameters of a start and end like (0, 0 + 1) also defined as (letterPlace and letterPlace + 1) // 
let letter = currentSentence.substring(letterPlace, letterPlace + 1);
let timerOn = false;
let startDate;
let startTime;
let mistakes = 0;

// hide keyboard //
$("#keyboard-upper-container").hide();
//when key is pressed down
$(document).keydown(function(e) {
// use event which when shift key is pressed, shift key = 16 //
  if (event.which === 16) {
    //uppercase is displayed
    $(upperKeys).show();
    $(lowerKeys).hide();
  }
});
//use event which when shift key is released, shift key = 16 //
$(document).keyup(function(event) {
  if (event.which === 16) {
    //lowercase is displayed
    $(lowerKeys).show();
    $(upperKeys).hide();
  }
});
// use keypress method to highlight keys pressed: define a key variable and call jquery //
//when a key is pressed, highlight its background yellow - style with css //
$(document).keypress(function(event) {
  let key = $("#" + event.which);
  $(key).css("background-color", "yellow");
//use keyup method to change back ground color back to white when released //
  $(document).keyup(function(event) {
    $(key).css("background-color", "white");
  });
});

// use targeted sentence id to house the current sentence //
$("#sentence").append(currentSentence);
//Also display the currently expected letter in the center (div id="target-letter" provided for you. Need to find a way to target the letter being pressed to match the current sentence and current letter.  target-letter and .text //
$("#sentence").text(currentSentence);
$("#target-letter").text(letter);


  $(document).keypress(function(event) {
    if (timerOn === false) {
      startDate = new Date();
      startTime = startDate.getTime();
      timerOn = true;
    }

//For each sentence, show a visual "log" of right/wrong per character by inserting one of the following into the div with id="feedback": If the correct key is pressed, indicate with a green check. If the correct key is not pressed, indicate  with a red X. At the end of each sentence, clear out the feedback divfind a way to distinguish whether the correct key is being typed. Use charcodes, index counts, and letter place. The correct key will be identified with a green check mark, and the incorrect will be identified with an x. Start with forming an IF/ELSE statement //
// step 1 - define what "correct" is and label this variable marked with a green check mark glyphicon ok from bootstrap.  Place the feedback result into "correct" object variable I create. //
    if (event.which == sentences[sentenceIndex].charCodeAt(letterPlace)) {
      let correct = $('<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>');
      $(correct).appendTo("#feedback");
//You should highlight the currently expected letter in the on-screen sentence that should be typed next. You can use the div with id="yellow-block" and nudge it along a fixed number of pixels if you'd like. Remember to reset it back to the beginning of the sentence when you move to the next sentence.//create highlight in sentence. Maybe I can highlight it yellow with css styling. Move the yellow to the next letter using ++//
      $("#yellow-block").css("left", "+=19px");
      letterPlace++;
      letter = currentSentence.substring(letterPlace, letterPlace + 1);
      $("#target-letter").text(letter);
//Find a way to determine and define if a sentence is completely typed to move on the the next sentence using length count and ++ again //
      if (letterPlace === currentSentence.length) {
        sentenceIndex++; 
//There should be a delay so the user can see the score. Then ask the user whether they would like to play again.vIf confirmed yes, reset the game back to the start.vIf no, leave as is.Find a way to determine and define if all sentences are completely typed and finished, then end the timer and count the words per minute typed //
        if (sentenceIndex === sentences.length) {
          let endDate = new Date();
          let endTime = endDate.getTime();
          let minutes = (endTime - startTime) / 60000;

// define words per minute variable and use the math.round method. //
// The user's words per minute should be calculated and displayed on the screen when you reach the end of the last sentence. Can be calculated by: `numberOfWords / minutes - 2 * numberOfMistakes` For number of words, you can just count how many words make up the sentences you were given and hard code that value. - There are 54 words so that can be defined as math.round(54/ minutes - 2 * mistakes)//
          wpm = Math.round(54 / minutes - 2 * mistakes);
// confirm when words per minute should be displayed on the screen //
          var confirmBox = confirm(
            `You typed ${wpm} words per minute! Try again?`
          );
          if (confirmBox == true) {
            location.reload();
          }
        } else {
          //changes sentence
          currentSentence = sentences[sentenceIndex];
          $("#sentence").text(currentSentence);
          letterPlace = 0;
          letter = currentSentence.substring(letterPlace, letterPlace + 1);
          $("#target-letter").text(letter);
          $("#yellow-block").css("left", "18px");
          $("#feedback").text("");
        }
      }
// not correct, "else" will be a red x glyphicon remove. Define what "wrong" is and place feedback result into "wrong" object variable
    } else {
      let wrong = $('<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
      $(wrong).appendTo("#feedback");
      mistakes++;
    }
  });



console.log ('end of script')
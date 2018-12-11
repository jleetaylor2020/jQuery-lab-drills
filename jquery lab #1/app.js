document.addEventListener('DOMContentLoaded', function () {
// In app.js, make sure all the HTML has loaded before using jQuery. (hint)
let div = document.createElement('div');
let h2 = document.createElement('h2');
let $searchInput = $('#searchInput').val();
let msg = document.createTextNode('BLLLLLAAAHHHH');
document.body.appendChild(div);
    div.append(h2);
    h2.append(msg);
// In app.js when the form is submitted, alert the value of the text input field. (hint) (hint)
    $(function () {
        $('#btnSubmit1').click(function () {
            alert("Ouch! I've been pinch-clicked.");
        });
// Create an <input> with a type="submit", id="btnSubmit", and value="Submit" in the index.html. Open the index.html in a browser and verify that a button appears.//
// In app.js and use jQuery to select the <input> element you just created by the id.//
// Add a click event handler to the <input> button that will alert a message in the browser when the button is clicked. (hint) //
        $(function () {
            $('#btnSubmit2').click(function () {
                let $searchInput = $('#searchInput').val();
                alert($searchInput);          
            });
          
// If the user has typed in the input field then the button should be enabled, otherwise the button should be disabled. (hint)//
            $(function () {
                $('#searchInput').keyup(function () {
                    if ($(this).val() == '') {
                        //Check to see if there is any text entered
                        // If there is no text within the input then disable the button
                        $('.enableOnInput').prop('disabled', true);
                    } else {
                        //If there is text in the input, then enable the button
                        $('.enableOnInput').prop('disabled', false);
                    };
// When the user types in the input field and clicks submit, append the text in an h2 element to the div//

                });

          // final tags below,do not delete ///////
        });
    });
});
});


// When the user mouses over the h2 element, assign it a new background color and border radius. (hint)  //


  
  // Create a div element and append it to the body.//  
    

//     document.addEventListener('mouseover', function () {
//         h2.style.color = getRandomColor();

//         function getRandomColor() {
//             let r = Math.floor(Math.random() * 256);
//             let g = Math.floor(Math.random() * 256);
//             let b = Math.floor(Math.random() * 256);
//             return "rgb(" + r + "," + g + "," + b + ")";

//         };
//     });
// });

console.log ('end of script');

        







// Great job! Now, delete the code for creating the h2 and we are going to work on creating a list
// Use jQuery to create an unordered list and append it to the body
// When the user submits the form, append the text as list item to the unordered list
// When the user clicks on the li element, assign it a random color.
// When the user double clicks on the list, remove the item that was clicked on. (hint)
// Hints
// jQuery on method: http://api.jquery.com/on/
// jQuery click method: https://api.jquery.com/click/
// Math.random() can be used to generate a random number
// RGB colors range from rgb(0, 0, 0) for black to rgb(255, 255, 255) for white
// You will want to generate 3 random numbers between 0 and 255 and set the RGB values using jQuery






















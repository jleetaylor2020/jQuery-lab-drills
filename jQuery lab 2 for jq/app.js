document.addEventListener('DOMContentLoaded', function () {

    //   #1 button with an alert //
    // Create a container div with DOM to hold button//
    let containerDiv = document.createElement('div');
    containerDiv.setAttribute("id", "div1");
    document.body.appendChild(containerDiv);

    //    Create a button with DOM //
    let button1 = document.createElement('button');
    let btnText = document.createTextNode('Click Me');
    button1.append('Click Me');
    containerDiv.appendChild(button1);

    // Create an alert handler with jquery //
    $(function () {
        $('button').click(function () {
            alert("hello world")
        });
    });
    
    // Function to get input value.
    $(function () {
        $('#text_value').click(function () {
            var text_value = $("#text").val();
            if (text_value == '') {
                alert("Enter Some Text In Input Field");
            } else {
                alert(text_value);
            }
        });
        $('#text_reset').click(function () {
            $("#text").val('');
        });

        $(function () {
            $('p').click(function () {
                alert("paragraph clicked")
            });
        });
        $('p').click(function(){
            $(this).toggleClass('clicked');
          });
// inserting new tags here below //
});

// NEED TO FINISH --Put some text in a paragraph. Make it where when you click on the paragraph, the color of the text switches to red. Once you get that working, try to rewrite your code to make it switch to a random color each click (you don't have to show the code for just red once you get random working)//

// $(function () {
//     $('.paraclick').click(function () {
//         alert("Your paragraph has been clicked and should change random colors!")
//     });
// });
// $('.paraclick').click(function(){
//     $(this).toggleClass('clicked');
//   });

// USE This for random color:
// function getRandomColor() {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     return "rgb(" + r + "," + g + "," + b + ")";


// NEED TO FINISH -- Add a button and an empty div. When the button is clicked, add a `span` that contains your name to the empty div.//
//    Create a button with DOM //
let button2 = document.createElement('button');
let btnText2 = document.createTextNode('Click Me');
button2.append('Click Me');
containerDiv.appendChild(button1);



// NEED TO FINISH -- Create a button and a `ul` in your HTML. In JavaScript, create an array containing the names of your friends (at least 10. If you don't have that many, include your imaginary ones). When the button is clicked, add each friend's name as an `li` to the `ul` on the page. //

      

   
  
  // tag closes domcontentloaded// 
});
    console.log('end of script');
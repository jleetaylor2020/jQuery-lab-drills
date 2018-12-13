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

        // $(function () {
        //     $('p').click(function () {
        //         alert("paragraph clicked")
        //     });
        // });
        $('p').click(function(){
            $(this).toggleClass('clicked');
          });
          let containerDiv = $('<div id="div1"></div>');
          $('body').append(containerDiv);
      
          $(containerDiv).append('<button>Click Me!</button>');
      
        //   $('button').click(function () {
        //       alert("hello world")
        //   });
      
          $('#text_value').click(function (e) {
              e.preventDefault();
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
      
          $('p').click(function () {
              $(this).css('color', getRandomColor());
          });
      
          $('.nicecolor').mouseover(function() {
              $(this).css('background-color', 'blue');
          });
      
          $('.nicecolor').mouseleave(function() {
              $(this).css('background-color', 'white');
          });
  // tag closes domcontentloaded// 
  function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
};
});
});
    console.log('end of script');

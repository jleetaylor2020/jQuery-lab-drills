document.addEventListener('DOMContentLoaded', function () {
    //   #1 button with an alert //
    // Create a container div with DOM to hold button//
    let containerDiv = document.createElement('div');
    containerDiv.setAttribute("id", "div1");
    document.body.appendChild(containerDiv);

    //    Create a button with DOM //
    let button = document.createElement('button');
    let btnText = document.createTextNode('Click Me');
    button.append('Click Me');
    containerDiv.appendChild(button);

    // Create an alert handler with jquery //
    $(function () {
        $('button').click(function () {
            alert("hello world")
        });
    });
    // #2 create a button and a text box that trigger and alert 
    // $(function () {
    //     $("#target").keyup(function () {
    //         alert("Handler for .keyup() called.");
    //     });
    // });

    // $(function () {
    //     $("#target").keyup(function () {
    //         var $target = $('#target').val();
    //             alert($target);
    //     });
    // });      
    // $(function () {
    //     $('#target2').click(function () {
    //         var $target = $('#target2').val();
    //         alert($target2);
    //     });  
    // }); 

    // $(function () {   
    // $( "#target2" ).click(function() {
    //     $( "#target2" ).keyup();
    //   });
    // });

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

// inserting new tags here below //
});

        // tag closes domcontentloaded// 
    });

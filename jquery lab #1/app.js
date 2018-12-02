document.addEventListener('DOMContentLoaded', function () {

    $(function () {
        $('#btnSubmit1').click(function () {
            alert("Ouch! I've been pinch-clicked.");
        });

        $(function () {
            $('#btnSubmit2').click(function () {
                var $searchInput = $('#searchInput').val();
                alert($searchInput);
            });

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
                    // final tags below,do not delete ///////
                });
            });
        });
    });

    var div = document.createElement('div');
    var h1 = document.createElement('h1');
    var msg = document.createTextNode('Need help here for #9 ....')
    document.body.appendChild(div);
    div.append(h1);
    h1.append(msg);

    document.addEventListener('mouseover', function () {
        h1.style.color = getRandomColor();

        function getRandomColor() {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            return "rgb(" + r + "," + g + "," + b + ")";

        };
    });
});























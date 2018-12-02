
// STUCK....#9. When the user types in the input field and clicks submit, append the text in an h2 element to the div
// document.addEventListener('DOMContentLoaded', function () {
// Button 1 ready function listens for DOM content loaded -->
$(function () {
    $('#btnSubmit').click(function () {
        alert("Ouch! I've been pinch-clicked.");
    });

    // button 2 place input text in an alert display//
    $(function () {
        $('#submitBtn').click(function () {
            var $searchInput = $('#searchInput').val();
            alert($searchInput);
            $('#submitBtn').click(function () {
                // h1.append('#submitBtn');
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

                    
                        var div = document.createElement('div');
                        var h1 = document.createElement('h1');
                        var msg = document.createTextNode('Need help here for #9 ....')
                        document.body.appendChild(div);
                        div.append(h1);
                        h1.append(msg);

                        function getRandomColor() {
                            let r = Math.floor(Math.random() * 256);
                            let g = Math.floor(Math.random() * 256);
                            let b = Math.floor(Math.random() * 256);
                            return "rgb(" + r + "," + g + "," + b + ")";

                        };

                        document.addEventListener('mouseover', function () {
                            h1.style.color = getRandomColor();
                });
            });
        
    
// keep inside global scope using let //
let upperKeyboard = ("#keyboard-upper-container");
let lowerKeyboard = ("#keyboard-lower-container");
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate']
// This is how to discover the correct code assoc. with key presses ie shift = 16 // comment out when done //
  // $("input").keydown(function(event){ 
  //     $("div").html("Key: " + event.which);
  //     console.log('Key is being pressed');
  // });



$("#keyboard-upper-container").hide();
//Using event.which (sounds like manwhich) to define when a key is pressed down - show upper and hide lower keyboards //
$(document).keydown(function(event) {
  // shiftkey is pressed
  if (event.which === 16) {
    $(upperKeyboard).show();
    $(lowerKeyboard).hide();
  }
});
// shiftkey is released //
$(document).keyup(function(event) {
  if (event.which === 16) {
    //lowercase is displayed
    $(lowerKeyboard).show();
    $(upperKeyboard).hide();
  }
});
// When a key is pressed or released, it is highlighted yellow. attn to the id's //
$(document).keypress(function(event) {
  let key = $("#" + event.which);
  $(key).css("background-color", "yellow");

  $(document).keyup(function(e) {
    $(key).css("background-color", "#f5f5f5");
  });
});
// I will display the defined sentences above in your html file only displaying one sentence at a time (I will use a css and js approach to accomplish this) INSERT //
 var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
    // -------------------------------------------- //
    







console.log ('end of script')
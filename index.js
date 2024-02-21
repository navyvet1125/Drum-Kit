// create event when user clicks on an instrument buttons.
$('.drum').toArray().forEach((button) => $(button).on("click",() => makeSound($(button).html())));

// create events for keyboard presses.
$(document).on("keydown", (event) => makeSound(event.key.toLowerCase()));

const makeSound = (key) => {
          switch(key) {
            case "w":
                new Audio("sounds/tom-1.mp3").play();
                break;
            case "a":
                new Audio("sounds/tom-2.mp3").play();
                break;
            case "s":
                new Audio("sounds/tom-3.mp3").play();
                break;
            case "d":
                new Audio("sounds/tom-4.mp3").play();
                break;
            case "j":
                new Audio("sounds/snare.mp3").play();
                break;
            case "k":
                new Audio("sounds/kick-bass.mp3").play();
                break;
            case "l":
                new Audio("sounds/crash.mp3").play();
                break;
 
            default:
                return; 
          }
        buttonAnimation(key);    
}
// Animates the specific button that triggered the event.
// Changes button to pressed state. after 1/10th of a second, the button goes back to normal. 
const buttonAnimation = (key) => {
    $('.'+key).addClass('pressed').css({"color": "white"})
    setTimeout(()=> $('.'+key).removeClass('pressed').css({"color": "#DA0463"}) ,100)
}
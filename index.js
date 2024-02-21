const soundBank ={
  w: new Audio("sounds/tom-1.mp3"),
  a: new Audio("sounds/tom-2.mp3"),
  s: new Audio("sounds/tom-3.mp3"),
  d: new Audio("sounds/tom-4.mp3"),
  j: new Audio("sounds/snare.mp3"),
  k: new Audio("sounds/kick-bass.mp3"),
  l: new Audio("sounds/crash.mp3")
}

// create event when user clicks on an instrument buttons.
$('.drum').toArray().forEach((button) => $(button).on("click",() => makeSound($(button).html())));

// create events for keyboard presses.
$(document).on("keydown", (event) => makeSound(event.key.toLowerCase()));

const makeSound = (key) => {
    if(soundBank[key]){
        soundBank[key].play();
        buttonAnimation(key);    
    }
}
// Animates the specific button that triggered the event.
// Changes button to pressed state. after 1/10th of a second, the button goes back to normal. 
const buttonAnimation = (key) => {
    $('.'+key).addClass('pressed').css({"color": "white"})
    setTimeout(()=> $('.'+key).removeClass('pressed').css({"color": "#DA0463"}) ,100)
}
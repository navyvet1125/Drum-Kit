// create events for mouse up and down for instrument buttons.  Button text turns white when button is clicked on.
document.querySelectorAll(".drum").forEach((button) => {
    const key = button.innerHTML;
    button.addEventListener("mousedown",() => makeSound(key, true, "white"));
    button.addEventListener("mouseup",() => makeSound(key, false, "#DA0463"));
});
// create events for when w,a,s,d,j,k, or l are pressed on keyboard.  Button text turns white when the appropriate key is pressed.  
document.addEventListener("keydown",(event) => makeSound(event.key.toLowerCase(), true, "white"));
document.addEventListener("keyup",(event) => makeSound(event.key.toLowerCase(), false, "#DA0463"));

const makeSound = (key, keydown, color) => {
          switch(key) {
            case "w":
                document.getElementsByClassName(key)[0].style.color = color
                if (keydown) new Audio("sounds/tom-1.mp3").play();
                break;
            case "a":
                document.getElementsByClassName(key)[0].style.color = color
                if (keydown) new Audio("sounds/tom-2.mp3").play();
                break;
            case "s":
                document.getElementsByClassName(key)[0].style.color = color
                if (keydown) new Audio("sounds/tom-3.mp3").play();
                break;
            case "d":
                document.getElementsByClassName(key)[0].style.color = color
                if (keydown) new Audio("sounds/tom-4.mp3").play();
                break;
            case "j":
                document.getElementsByClassName(key)[0].style.color = color
                if (keydown) new Audio("sounds/snare.mp3").play();
                break;
            case "k":
                document.getElementsByClassName(key)[0].style.color = color
                if (keydown) new Audio("sounds/kick-bass.mp3").play();
                break;
            case "l":
                document.getElementsByClassName(key)[0].style.color = color
                if (keydown) new Audio("sounds/crash.mp3").play();
                break;
 
            default: 
          }
}
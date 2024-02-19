// create event when user clicks on an instrument buttons.
document.querySelectorAll(".drum").forEach((button) => {
    const key = button.innerHTML;
    button.addEventListener("click",() => {
        buttonAnimation(key)
        makeSound(key) 
    });
});
// create events for when w,a,s,d,j,k, or l are pressed on keyboard.  
document.addEventListener("keydown",(event) => {
    const key = event.key.toLowerCase();
    buttonAnimation(key);    
    makeSound(key);
});

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
          }
}
// Animates the specific button that triggered the event.
const buttonAnimation = (key) => {
    // button pressed state.
    document.querySelector('.'+key).classList.add('pressed')
    document.querySelector('.'+key).style.color = "white"
    //after 1/10th of a second, the but goes back to normal. 
    setTimeout(()=> {
        document.querySelector('.'+key).classList.remove('pressed')
        document.querySelector('.'+key).style.color = "#DA0463"
    },100)
}
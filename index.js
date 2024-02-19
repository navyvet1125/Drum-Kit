// const tom = new Audio("sounds/tom-1.mp3")
document.querySelectorAll(".drum").forEach((button) => {
    button.addEventListener("click",() => {
        switch(button.innerHTML) {
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
 
            default: console.log(button.innerHTML)
        }
    });
    });
document.addEventListener("keydown",(event) => {
        switch(event.key.toLowerCase()) {
            case "w":
                new Audio("sounds/tom-1.mp3").play();
                break;
            case "a":
                new Audio("sounds/tom-2.mp3").play();
                break;
            case "s":;
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
});
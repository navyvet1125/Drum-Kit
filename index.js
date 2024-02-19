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
        const key = event.key.toLowerCase() 
        switch(key) {
            case "w":
                document.getElementsByClassName(key)[0].style.color = "white"
                new Audio("sounds/tom-1.mp3").play();
                break;
            case "a":
                document.getElementsByClassName(key)[0].style.color = "white"
                new Audio("sounds/tom-2.mp3").play();
                break;
            case "s":
                document.getElementsByClassName(key)[0].style.color = "white"
                new Audio("sounds/tom-3.mp3").play();
                break;
            case "d":
                document.getElementsByClassName(key)[0].style.color = "white"
                new Audio("sounds/tom-4.mp3").play();
                break;
            case "j":
                document.getElementsByClassName(key)[0].style.color = "white"
                new Audio("sounds/snare.mp3").play();
                break;
            case "k":
                document.getElementsByClassName(key)[0].style.color = "white"
                new Audio("sounds/kick-bass.mp3").play();
                break;
            case "l":
                document.getElementsByClassName(key)[0].style.color = "white"
                new Audio("sounds/crash.mp3").play();
                break;
 
            default: 
        }    
});

document.addEventListener("keyup",(event) =>{
    const key = event.key.toLowerCase()
    switch(key) {
        case "w":
            document.getElementsByClassName(key)[0].style.color = "#DA0463";
            break;
        case "a":
            document.getElementsByClassName(key)[0].style.color = "#DA0463";
            break;
        case "s":
            document.getElementsByClassName(key)[0].style.color = "#DA0463";
            break;
        case "d":
            document.getElementsByClassName(key)[0].style.color = "#DA0463";
            break;
        case "j":
            document.getElementsByClassName(key)[0].style.color = "#DA0463";
            break;
        case "k":
            document.getElementsByClassName(key)[0].style.color = "#DA0463";
            break;
        case "l":
            document.getElementsByClassName(key)[0].style.color = "#DA0463";
            break;
        default:

    }
});
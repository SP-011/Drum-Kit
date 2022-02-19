var li = [".w", ".a", ".s", ".d", ".j", ".k", ".l"]
for (let i=0;i<7;i++){
    document.querySelector(li[i]).addEventListener("click", function (){
        
        var so = this.innerHTML
        makeSound(so)   
        makeAnimation(so)
    });
}

document.addEventListener('keypress', function(event){
    makeSound(event.key)
    makeAnimation(event.key)
})

function makeSound(key){

    switch (key) {
        case ("a"):
            var s = new Audio('sounds/tom-1.mp3');
            s.play(); 
            break;

        case ("w"):
            var s = new Audio('sounds/kick-bass.mp3');
            s.play(); 
            break;

        case ("s"):
            var s = new Audio('sounds/tom-2.mp3');
            s.play(); 
            break;

        case ("d"):
            var s = new Audio('sounds/snare.mp3');
            s.play(); 
            break;

        case ("j"):
            var s = new Audio('sounds/crash.mp3');
            s.play(); 
            break;

        case ("k"):
            var s = new Audio('sounds/tom-3.mp3');
            s.play(); 
            break;

        case ("l"):
            var s = new Audio('sounds/tom-4.mp3');
            s.play(); 
            break;


        default:
            break;
    }
}

function makeAnimation(ke){
    var ani = document.querySelector("."+ke)
    ani.classList.add("pressed")
    setTimeout(function(){
        ani.classList.remove("pressed");
    }, 100)    
}
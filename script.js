var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
var highScore = 0;
var scores = [];
var button = document.getElementById('pause');
var on = false;
var sprite = document.getElementById("sprite"), n = 0;

setInterval(function spriteanimate(){
    if (on){
    if (n==6){n=0}
    sprite.src = 'images/dino'+n.toString()+'.png';
    console.log(n)
    n+=1;}

},50);
    button.addEventListener('click', function handleClick() {
        if (on == true){
            on = false;
            block.style.animation = "none";
            //character.classList.remove("animate");
        }
        else {
            on = true
            //character.classList.add("animate");
            block.style.animation = "block 1s infinite linear";
        };
        console.log('on!', on);
    });
    function jump(){
        if(character.classList == "animate"){return}
        character.classList.add("animate");
        setTimeout(function(){
            character.classList.remove("animate");
        },300);
    }
    var checkDead = setInterval(function() {
        if (on){
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
            block.style.animation = "none";
            if (Math.floor(counter)>highScore){
                highScore = Math.floor(counter);
                scores.push(Math.floor(counter));
                //exports.scores = scores;
                document.getElementById("scores").value = scores
                console.log(scores)
                document.getElementById("highscore").innerHTML = highScore;
            }
            counter=0;
            block.style.animation = "block 1s infinite linear";
        }
        else{
            counter++;
            document.getElementById("scoreSpan").innerHTML = Math.floor(counter);
        }
    }
    }, 10);

var character = document.getElementById("character");
    var block = document.getElementById("block");
    var counter=0;
    var highScore = 0;
    var scores = [];
    
    function jump(){
        if(character.classList == "animate"){return}
        character.classList.add("animate");
        setTimeout(function(){
            character.classList.remove("animate");
        },300);
    }
    var checkDead = setInterval(function() {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
            block.style.animation = "none";
            if (Math.floor(counter/100)>highScore){
                highScore = Math.floor(counter/100);
                scores.push(Math.floor(counter/100));
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
            document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
        }
        
    }, 10);

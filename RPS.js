function computerPlay(){
    turn = ["Rock", "Scissors", "Paper"];
    let t = Math.floor(Math.random() * 3);
    let t1 = Math.random();
    return turn[t];
}

function Winner(event){
     let p = event.target.id;
     let c = computerPlay();
     //let c2 = document.querySelector('button#'+c);
     document.querySelector("#ComputerChoice").innerText = c;
     let result = '';
    let wincount = 0;
    let drawcount = 0;
    let losecount = 0;
    switch(p)
    {
        case "Rock":
                if(c == "Rock"){
                    drawcount++
            result = "Draw" + " (" + drawcount + " times)";
                }
                else if (c == "Scissors"){
                    wincount++
            result = "You Win" + " (" + wincount + " times)";
                }
                else {
                    losecount++;
                    result = "You lose" + " (" + losecount + " times)";
                }
            break;
        case "Scissors":
                if(c == "Scissors"){
             drawcount++
            result = "Draw" + " (" + drawcount + " times)";
                }
                else if (c == "Paper"){
             wincount++
            result = "You Win" + " (" + wincount + " times)";
                }
                else {
                    losecount++;
                    result = "You lose" + " (" + losecount + " times)";
                }
            break;
        case "Paper":
                if(c == "Paper"){
             drawcount++
            result = "Draw" + " (" + drawcount + " times)";
                }
                else if (c == "Rock"){
             wincount++
            result = "You Win" + " (" + wincount + " times)";
                }
                else {
                    losecount++;
                    result = "You lose" + " (" + losecount + " times)";
                }
            break;
        default:
            ;
            break;
    }
    //alert(result);
    document.querySelector('#Result').innerText = result;
}

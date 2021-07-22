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
    switch(p)
    {
        case "Rock":
                if(c == "Rock"){
            result = "Draw";
                }
                else if (c == "Scissors"){
             result = "You win";
                }
                else {result = "You lose";}
            break;
        case "Scissors":
                if(c == "Scissors"){
            result = "Draw";
                }
                else if (c == "Paper"){
             result = "You win";
                }
                else {result = "You lose";}
            break;
        case "Paper":
                if(c == "Paper"){
            result = "Draw";
                }
                else if (c == "Rock"){
             result = "You win";
                }
                else {result = "You lose";}
            break;
        default:
            ;
            break;
    }
    //alert(result);
    document.querySelector('#Result').innerText = result;
}

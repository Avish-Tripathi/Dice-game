var p1 = Math.floor(Math.random()*6)+1;

var src = "images/dice" + p1 + ".png";

document.querySelector("img").setAttribute("src", src);


var p2 = Math.floor(Math.random()*6)+1;

var src1 = "images/dice" + p2 + ".png";

document.querySelector(".p2 img").setAttribute("src", src1);


if(p1 > p2){
    document.querySelector("h1").innerHTML = "Player 1 Wins !";
}else if(p1 < p2){
    document.querySelector("h1").innerHTML = "Player 2 Wins !";
}else{
    document.querySelector("h1").innerHTML = "Draw !";
}


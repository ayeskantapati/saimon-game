let gameseq = [];
let userseq = [];
let stated = false;
let level = 0;
let h2 = document.querySelector("h2")
let btns = ["yellow", "red", "purple", "green"];

document.addEventListener("keypress",function(){
    if (stated == false){
    console.log("Game stated");
    stated = true;
    levelup();
}

});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);

}

function levelup(){
    userseq =[];
    level++;
    h2.innerText = `level ${level}`;

    let randidx = Math.floor(Math.random()*3);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    // console.log(randidx);
    // console.log(randcolor);
    // console.log(randbtn);
   //random button choise
    gameseq.push(randcolor);
   console.log(gameseq);
   gameFlash(randbtn);
}

function cheakans(idx){
    // console.log("current level :" ,level);
    
    if(userseq[idx] == gameseq[idx]){
    if(userseq.length == gameseq.length){
        setTimeout(levelup,1000);
    }
     }
    else{
        h2.innerHTML = `Game over ! Your score was<b>${level}</b><br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnpress (){
    let btn = this;
    
    userFlash(btn);

    usercolor = btn.getAttribute("id")
    userseq.push(usercolor);

    cheakans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    stated = false;
    gameseq = [];
    userseq = [];
    level = 0;

}


    

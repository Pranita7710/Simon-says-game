let gameseq=[];
let userseq=[];

let started=false;
let level=0;

let h2=document.querySelector("h2")
let btns=["yellow","green","red","purple"]

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;

         levelup();
    }

   
});


function btnflash(btn){
     btn.classList.add("flash");
     setTimeout(function(){
        btn.classList.remove("flash");
     },250);
}

function userflash(btn){
     btn.classList.add("userflash");
     setTimeout(function(){
        btn.classList.remove("userflash");
     },250);
}


function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randomIdx=Math.floor(Math.random()*3);
    let randomcolor=btns[randomIdx];
    let randombtn=document.querySelector(`.${randomcolor}`);
    // console.log(randomIdx);
    // console.log(randomcolor);
    // console.log(randombtn);
    gameseq.push(randomcolor);
    console.log(gameseq);
    btnflash(randombtn);
}


function checkAns(idx){
    // console.log("curr level:",level);
    
    if(userseq[idx]===gameseq[idx]){
        
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000)
            // levelup();
        }
    }else{
        h2.innerHTML=`Game Over! Your score was<b>${level} </b><br>press any key to start`;
        document.querySelector("body").style.backgroundcolor="red";
        setTimeout(function(){
          document.querySelector("body").style.backgroundcolor="white";
        },150);
        reset();
    }
}

function btnpress(){
    console.log(this);
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
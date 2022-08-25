let home = document.getElementById("home");
let guest = document.getElementById("guest");
let hscore = 0;
let gscore = 0;
function ph1(){
    hscore +=1;
    home.innerHTML=hscore; 
}
function ph2(){
    hscore +=2;
    home.innerHTML=hscore; 
}
function ph3(){
    hscore +=3;
    home.innerHTML=hscore; 
}
function pg1(){
    gscore +=1;
    guest.innerHTML=gscore; ;
}
function pg2(){
    gscore +=2;
    guest.innerHTML=gscore; ;
}
function pg3(){
    gscore +=3;
    guest.innerHTML=gscore; ;
}
function reset(){
    gscore = 0;
    hscore = 0;
    home.innerHTML=hscore; 
    guest.innerHTML=gscore;
}
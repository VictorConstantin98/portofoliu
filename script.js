console.log(document.getElementById("idSection1"));
window.onload=function(event){
    console.log(event);
    let elem = document.createElement("h1");
    const text = "Hello World!";
    elem.textContent = text;
    document.body.appendChild(elem);
    document.getElementById("linkedInButton").onclick=function(ev){
        window.open("https://www.google.com","_blank");
    };
    const socials = document.getElementsByClassName("socialButtons");
    console.log(socials.length);
    for(let element of socials){
        console.log(element);
        element.style.color="red";
        console.log(element.getAttribute("href"));
        console.log(elem);
    };
    let element;
    console.log(test1);
    random();
};
var variabila = 150;
let test = "test";
const test1 = "test1";
function random(){
    console.log("random");
};

let obj = {
    name:'Costi',
    age:24
};
let obj1 = obj;
obj1.age=20;
obj1 = {
    new1:'new'
}
let objSpread = {...obj};
objSpread.name='x';
console.log(obj,obj1,objSpread);


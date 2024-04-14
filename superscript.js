function helloWorld(){
    document.body.innerHTML= "<h1>Hello World !</h1>";
}

//helloWorld();

function leChangement(){
    const titles = document.querySelectorAll("h1");
    
    console.log(titles);
    
    for (let i=0 ; i<titles.length;++i){
        titles[i].innerHTML = "POLYTECH DIJON ";
        titles[i].style.color = "#4691ff";
        
    }

    const lien = document.querySelectorAll("a")

    lien[0].href="https://esirem.u-bourgogne.fr";

}

leChangement();

function testValue(input){
    if(isNaN(input)=== true){
        document.body.input.style.color = "#FF2D00"
    }
    else if (input%2===0){
        document.body.input.style.color = "#FFE800"
    }
    else{
        document.body.input.style.color = "#2D00FF"
    }
}

function connectClickEvent(){
    const bouton = document.querySelector("button");

}



try{
const txtMail = document.querySelector("#txt-mail");
input.addEventListener("input", testValue);
}
catch(TypeError){
    
};


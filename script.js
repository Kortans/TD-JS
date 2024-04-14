console.log("Polytech Dijon !");

let area = "VIDE";
const width = 1920;
const height = 1080;
area = width*height;

const array = [];
array.push(17);
array.push("chaine de caractère");

try{
height = 1200;
}
catch(TypeError){
    console.log("Erreur attrapée");
    console.log(TypeError);
}
console.log(area);
console.log(array);




let notTrue = false;
let zero = 0;
if(notTrue === zero){
    console.log("Elles sont égales");
} 
else{
    console.log("Elles ne sont pas égales");
}

let newArray = [];
for (let j =0 ; j<30; ++j){
    newArray.push(Math.random())
}
console.log(newArray);

let newerArray = [1,2,3,4,5,6];

function moyenneTab(array){
    let sum = 0;
    for (let i=0; i< array.length; ++i){
        sum = sum + array[i];
    }
    let moy = sum/array.length ;
    return moy;
}
console.log(moyenneTab(newerArray));

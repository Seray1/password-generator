const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOne = document.getElementById("pass1")
let passwordTwo = document.getElementById("pass2")
let passwordLength = 15
let generateButton = document.getElementById("btn")
const copyOne = document.getElementById("copy1")
const copyTwo = document.getElementById("copy2")


function randomPassword(){
   
    
    let resultOne = Math.floor(Math.random()* characters.length  );
    let resultTwo = characters[Math.floor(Math.random()* characters.length)]
    return characters[resultOne]

} 


function generate(){  
    let result = " "
    passwordOne.value = result
    passwordTwo.value = result
   
    for(let i = 0; i< passwordLength; i++){
        passwordOne.value += randomPassword()
        passwordTwo.value += randomPassword()
    } 

   
}
generateButton.addEventListener("click",generate)

copyOne.addEventListener("click", () =>{
    passwordOne.select();
    document.execCommand("copy")
})

copyTwo.addEventListener("click", () =>{
    passwordTwo.select();
    document.execCommand("copy")
})
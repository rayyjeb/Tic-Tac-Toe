// list down all the winning combinations
let arr = [ ""]
let winningCombinations = [
[1,2,3],//vertical
    [4,5,6],//vertical
    [7,8,9],//vertical
    [1,4,7],//horizontal
    [2,5,8],//horizontal
    [3,6,9],//horizontal
    [1,5,9],//diagonal
    [3,5,7],//diagonal
]
// accesing all boxes
let boxelement= document.querySelectorAll(".box")
// providing event listener to all the boxes

for(elem of boxelement){
    elem.addEventListener("click", handleClick);

}
let click = 0;
let isWon=false;
let xAttempts = [];
let oAttempts = []; 
function handleClick(event){
let id = event.target.id;//for taking the id of the box where we are clicking
let ptag = document.createElement("p"); //writing a symbol
ptag.style.color = "#FAB201"
boxelement[id-1].appendChild(ptag)

if (click%2==0){
    ptag.textContent="X";
    click++
    xAttempts.push(parseInt(id)); //parse int= convert string to integer
    console.log(xAttempts);
    result(xAttempts, "X")
}else{
    ptag.textContent="O";
    click++;
    oAttempts.push(parseInt(id)); //parse int= convert string to integer
    result(oAttempts, "O")
    console.log(oAttempts);
}
//because 9 boxes are clicked without satisfying the condition
if(click==9 && isWon==false){
    setTimeout(()=>{
    resultBox.style.visibility="visible";
    messageBox.textContent="Draw"
    },2000)
}
}
let resultBox= document.getElementById("result");
let messageBox=document.getElementById("message");
function result(playerArray , player){
    console.log(player, playerArray);

    for(let i=0;i<winningCombinations.length;i++){
        console.log(winningCombinations[i]);
        let check = true;
        for (let j=0;j<winningCombinations[i].length;j++){
            if(playerArray.includes(winningCombinations[i][j]) == false){
                check = false;
                break;
            }
        }
        console.log(check);
        if(check==true){
            isWon=true;
            resultBox.style.visibility = "visible";
            messageBox.textContent=player+" Won the match"
        }
    }
}
let playAgainbtn = document.getElementById("button");
playAgainbtn.addEventListener('click', function(){
    location.reload();
    // history.go(0);
    });
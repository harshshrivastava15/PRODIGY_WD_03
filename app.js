let boxex = Array.from(document.getElementsByClassName('boxes'))
let space = Array(9).fill(null);
const X = "X"
const O = "O"
let cp = X;
let reset = document.getElementById('reset')
reset.addEventListener('click', Reset);
let text = document.getElementById('text');
const winn =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

function Winn(){
    for (const cond of winn) {
        let [a,b,c]=cond;

        if(space[a] && space[a] == space[b] && space[b] == space[c]){
            return [a,b,c]
        }
        
    }
    return false;
}
function isDraw() {
    return space.every(cell => cell !== null);
}
boxex.forEach(box=>
    box.addEventListener('click',()=>boxClicked(box))
)

function boxClicked(box) {
    const id = box.id;

    if (!space[id]) {
        space[id] = cp;
        box.innerHTML = cp;
        text.innerHTML = "";

        let winner = Winn();
        if (winner !== false) {
            text.innerHTML = `${cp} has won!`;
            winner.forEach(d=>{
                document.getElementById(d).style.backgroundColor="grey";
            })
            disableClicks();
            return;
        }

        if (isDraw()) {
            text.innerHTML = "It's a draw!";
            return;
        }

        cp = cp === X ? O : X;
        text.innerHTML = `Player ${cp}`;
    }
}
function disableClicks() {
    boxex.forEach(box => box.style.pointerEvents = 'none');
}

function enableClicks() {
    boxex.forEach(box => box.style.pointerEvents = 'auto');
}


function Reset(){
    boxex.forEach((box)=>{
        box.innerHTML="";
        space[box.id]=null;
        cp=X;
        text.innerHTML="Player X"
        box.style.backgroundColor="black"


    })
    
}



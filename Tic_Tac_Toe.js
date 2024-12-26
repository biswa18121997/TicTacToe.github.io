let boxes=[];
let moves=0;

//saare boxes ko ek array me daal diya.
for(let x=0;x<9;x++){
    boxes[x]=document.querySelector("#game_grid").childNodes[i+1];
}

//winn ka logic ye hone mange...
function winn(){
    if(boxes[0].textContent==boxes[1].textContent && boxes[1].textContent==boxes[2].textContent){
        return true;
    }
    else if(boxes[3].textContent==boxes[4].textContent && boxes[4].textContent==boxes[5].textContent){
        return true;
    }
    else if(boxes[6].textContent==boxes[7].textContent && boxes[7].textContent==boxes[8].textContent){
        return true;
    }
    else if(boxes[0].textContent==boxes[3].textContent && boxes[3].textContent==boxes[6].textContent){
        return true;
    }
    else if(boxes[1].textContent==boxes[4].textContent && boxes[4].textContent==boxes[7].textContent){
        return true;
    }
    else if(boxes[2].textContent==boxes[5].textContent && boxes[5].textContent==boxes[8].textContent){
        return true;
    }
    else if(boxes[0].textContent==boxes[4].textContent && boxes[4].textContent==boxes[8].textContent){
        return true;
    }
    else if(boxes[2].textContent==boxes[4].textContent && boxes[4].textContent==boxes[6].textContent){
        return true;
    }
    else{
        return false;
    }

let boxes = [];

for (let x = 0; x < 9; x++) {
  // boxes[x]=document.
}

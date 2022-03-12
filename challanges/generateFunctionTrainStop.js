/*
Generate Function of train stops
*/

function* getStop(){
    yield "Pike";
    yield "Pine";
    yield "Union";
    yield "Western";
    yield "South Lake";
    yield "Dexter";
    yield "Fremont";
    yield "Greenlake"
}

const seaTrainline = getStop();
// in html file add a button with an id ="next-stop"

const nextStopBotton = document.querySelector("#next-stop");
nextStopBotton.addEventListener('click',() =>{
    let currStop = seaTrainline.next();
    if(currStop.done){
        console.log('We made it! Last Stop');
        nextStopBotton.setAttribute("disabled", true);
    }else{
        console.log(currStop.value);
    }
    
});
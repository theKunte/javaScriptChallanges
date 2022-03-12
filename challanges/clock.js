/*
Call Back Function 
SetTimeOut -> Requieres timeout function

Challange:

1. Create a Ticking clock 
2. Div with an id of "clock"
3. Display the current hours, miuntes and seconds. 

*/

function clock(){
    const clocNode = document.querySelector("#clock");
    return setInterval(() => {
        let date = new Date();
        let tick = date.toLocaleTimeString();
        clocNode.textContent = tick;
    }, 1000);
}

clock();
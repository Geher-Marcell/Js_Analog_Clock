let clockStats = [
    {
        id: 'second',
        numCount: 14,
        oneRot: 60
    },
    {
        id: 'minute',
        numCount: 10,
        oneRot: 60
    },
    {
        id: 'hour',
        numCount: 6,
        oneRot: 12
    }
]

CreateClock();
CreateBackground();

setInterval(() => {
    let date = new Date();
    let dates = [date.getHours(), date.getMinutes(), date.getSeconds()];
    
    for(let i = 0; i < clockStats.length; i++) {
        let time = dates[dates.length-1 - i];
        let deg = (time / clockStats[i].oneRot)*360;

        document.querySelector(`#${clockStats[i].id}`).style.transform = `translate(50%, 50%) rotate(${deg}deg)`;

        document.querySelectorAll(`#${clockStats[i].id} .clockNum`).forEach((el, index) => {
            el.innerHTML = time;
            el.style.transform = `rotate(-${180+deg}deg)`;
        });
    }
}, 1000);

function CreateClock(){   
    let clock = document.querySelector("#clock");
    for(let i = 0; i < clockStats.length; i++){
        let pointer = document.createElement('div');
        pointer.id = clockStats[i].id;

        //Default styling for the pointer
        pointer.style.width = "10px";
        pointer.style.height = "10px";
        pointer.style.position = "absolute";
        pointer.style.top = "50%";
        pointer.style.left = "50%";
        pointer.style.rotate = "180deg";

        let num = document.createElement('div');

        //Default styling for the inner div of the pointer
        num.style.display = "grid";
        num.style.gridTemplateRows = "1fr 1fr";
        num.style.marginTop = "20px";

        pointer.appendChild(num);

        for(let j = 0; j < clockStats[i].numCount; j++){
            let p = document.createElement('p');
            p.classList.add('clockNum');
            p.innerText = j;

            //Default styling for the numbers
            p.style.padding = 0;
            p.style.margin = 0;

            num.appendChild(p);
        }

        clock.appendChild(pointer);

        clock.style.position = "relative";
        clock.style.width = "1px";
        clock.style.height = "1px";
    }
}

function CreateBackground(){
    let clock = document.querySelector("#clock");
    
    let div = document.createElement('div');
    div.style.width = "30vw";
    div.style.height = "30vw";
    div.style.border = "1px solid black";
    div.style.position = "absolute";
    div.style.top = "50%";
    div.style.left = "50%";
    div.style.transform = "translate(-50%, -50%)";
    div.style.borderRadius = "50%";
    div.id = "background";

    clock.appendChild(div);

    //Create 12 divs for the hours
    for(let i = 0; i < 12; i++){
        let pivot = document.createElement('div');
        pivot.style.width = "10px";
        pivot.style.height = "10px";
        pivot.style.position = "absolute";
        pivot.style.top = "50%";
        pivot.style.left = "50%";
        pivot.style.transform = `translate(-50%, -50%) rotate(${i*30}deg)`;
        pivot.classList.add('pivot');

        let hour = document.createElement('div');
        hour.style.width = "2px";
        hour.style.height = "10px";
        hour.style.position = "absolute";
        hour.style.top = "50%";
        hour.style.left = "50%";
        hour.style.transform = "translate(-50%, -50%)";
        hour.style.backgroundColor = "black";
        hour.style.marginTop = "14vw";
        pivot.classList.add('hourLine');

        pivot.appendChild(hour);
        div.appendChild(pivot);
    }
}
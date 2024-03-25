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
    for(let i = 0; i < clockStats.length; i++){
        let pointer = document.createElement('div');
        pointer.id = clockStats[i].id;

        //Default styling
        pointer.style.width = "10px";
        pointer.style.height = "10px";
        pointer.style.position = "absolute";
        pointer.style.top = "50%";
        pointer.style.left = "50%";
        pointer.style.rotate = "180deg";

        let num = document.createElement('div');

        //Default styling
        num.style.display = "grid";
        num.style.gridTemplateRows = "1fr 1fr";
        num.style.marginTop = "20px";

        pointer.appendChild(num);

        for(let j = 0; j < clockStats[i].numCount; j++){
            let p = document.createElement('p');
            p.classList.add('clockNum');
            p.innerText = j;

            //Default styling
            p.style.padding = 0;
            p.style.margin = 0;

            num.appendChild(p);
        }

        document.querySelector("#clock").appendChild(pointer);

        document.querySelector("#clock").style.position = "relative";
    }
}

function CreateBackground(){
    let clock = document.querySelector("#clock");
    
    let div = document.createElement('div');
    div.style.width = "30vw";
    div.style.height = "30vw";
    div.style.border = "1px solid black";
    div.style.borderRadius = "50%";

    clock.appendChild(div);
}
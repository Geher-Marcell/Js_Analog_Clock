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

setInterval(() => {
    let date = new Date();

    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    let secondsDeg = (seconds / 60) * 360;
    let minutesDeg = (minutes / 60) * 360;
    let hoursDeg = (hours / 12) * 360;

    // clock hands
    document.querySelector('#second').style.transform = `rotate(${secondsDeg}deg)`;
    document.querySelector('#minute').style.transform = `rotate(${minutesDeg}deg)`;
    document.querySelector('#hour').style.transform = `rotate(${hoursDeg}deg)`;

    document.querySelectorAll('#second>div>p').forEach((el) => {
        el.innerHTML = seconds;
        el.style.transform = `rotate(-${180+secondsDeg}deg)`;
    });
    document.querySelectorAll('#minute>div>p').forEach((el) => {
        el.innerHTML = minutes;
        el.style.transform = `rotate(-${180+minutesDeg}deg)`;
    });
    document.querySelectorAll('#hour>div>p').forEach((el) => {
        el.innerHTML = hours;
        el.style.transform = `rotate(-${180+hoursDeg}deg)`;
    });
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
        pointer.style.transform = "translate(-50%, -50%)";

        let num = document.createElement('div');

        //Default styling
        num.style.display = "grid";
        num.style.gridTemplateRows = "1fr 1fr";
        num.style.marginTop = "20px";

        pointer.appendChild(num);

        for(let j = 0; j < clockStats[i].numCount; j++){
            let p = document.createElement('p');
            p.classList.add('clockNum');

            //Default styling
            p.style.padding = 0;
            p.style.margin = 0;

            num.appendChild(p);
        }

        document.querySelector("#clock").appendChild(pointer);

        document.querySelector("#clock").style.position = "relative";
    }
}
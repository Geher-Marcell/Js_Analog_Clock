

setInterval(() => {
    let date = new Date();

    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    let secondsDeg = (seconds / 60) * 360;
    let minutesDeg = (minutes / 60) * 360;
    let hoursDeg = (hours / 12) * 360;

    document.getElementById('second').style.transform = `rotate(${secondsDeg}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minutesDeg}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hoursDeg}deg)`;
}, 1000);
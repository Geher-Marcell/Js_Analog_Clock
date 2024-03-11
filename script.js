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

    document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds}`;

    document.querySelectorAll('#second>div>p').forEach((el) => {
        el.innerHTML = seconds;
        el.style.transform = `rotate(-${secondsDeg}deg)`;
    });
    document.querySelectorAll('#minute>div>p').forEach((el) => {
        el.innerHTML = minutes;
    });
    document.querySelectorAll('#hour>div>p').forEach((el) => {
        el.innerHTML = hours;
    });
}, 1000);
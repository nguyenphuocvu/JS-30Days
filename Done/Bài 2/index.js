const now = new Date();
function setDate() {
    now.setSeconds(now.getSeconds() + 1);

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;

    const secDeg = Math.round((seconds / 60) * 360);

    const minDeg = (minutes / 60) * 360;
    const hourDeg = (hours / 12) * 360;

    document.querySelector(
        ".second-hand"
    ).style.transform = `rotate(${secDeg}deg)`;
    document.querySelector(".min-hand").style.transform = `rotate(${minDeg}deg)`;
    document.querySelector(
        ".hour-hand"
    ).style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 100);

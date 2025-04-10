

function setDate() {
    const gioHienTai = new Date();

    const seconds = gioHienTai.getSeconds();
    const hienThiSeconds = (seconds * 10) % 60;
    console.log(hienThiSeconds);


    const minutes = gioHienTai.getMinutes();
    const hours = gioHienTai.getHours() % 12;


    const secDeg = (seconds / 60) * 360 + 90;
    const minDeg = (minutes / 60) *360 + 90;
    const hourDeg = (hours / 12) * 360 + 90;

    document.querySelector(".second-hand").style.transform = `rotate(${secDeg}deg)`;
    document.querySelector(".min-hand").style.transform = `rotate(${minDeg}deg)`;
    document.querySelector(".hour-hand").style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);

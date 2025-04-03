function setDate() {
  const currentHour = new Date();

 
  function gocQuay(degree) {
    return (degree / 60) * 360 + 90;
  }

  document.querySelector(".second-hand").style.transform = `rotate(${gocQuay(currentHour.getSeconds())}deg)`;

  // Cập nhật phút
  document.querySelector(".min-hand").style.transform = `rotate(${gocQuay(currentHour.getMinutes())}deg)`;

  // Cập nhật giờ
  const gocGio = ((currentHour.getHours() % 12) / 12) * 360 + 90;
  document.querySelector(".hour-hand").style.transform = `rotate(${gocGio}deg)`;
}

setInterval(setDate, 1000);


document.addEventListener("DOMContentLoaded", function () {
  const clockFace = document.querySelector(".clock-face");

  for (let i = 0; i < 12; i++) {
    const mark = document.createElement("div");
    mark.classList.add("mark");

    mark.style.transform = `rotate(${i * 30}deg) translateY(-80px)`;

    clockFace.appendChild(mark);
  }
});

function setDate() {
  const currentHour = new Date();

  //Giây
  const giay = currentHour.getSeconds();

  const gocQuay = (giay / 60) * 360 + 90;

  const secondHand = document.querySelector(".second-hand");
  secondHand.style.transform = `rotate(${gocQuay}deg)`;

  //Phút
  const phut = currentHour.getMinutes();
  const gocPhut = (phut / 60) * 360 + 90;

  const minHand = document.querySelector(".min-hand");
  minHand.style.transform = `rotate(${gocPhut}deg)`;

  //Giờ

const hour = currentHour.getHours();  
const gocGio = ((hour % 12) / 12) * 360 + 90 

const hourHand = document.querySelector(".hour-hand");
hourHand.style.transform = `rotate(${gocGio}deg)`;
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


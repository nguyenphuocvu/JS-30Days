function pressKey() {
  document.addEventListener("keydown", (e) => {
    const allKey = document.querySelectorAll(".key");

    const key = document.querySelector(
      `.key[data-key="${e.key.toUpperCase()}"]`
    );

    if (key) {
      const audio = key.querySelector("audio");
      if (audio) {
        audio.play();
        audio.currentTime = 0;
      }

      key.classList.add("playing");
      key.classList.add("playing1");
      key.classList.add("playing2");

      setTimeout(() => {
        key.classList.remove("playing");
      }, 5000);
      setTimeout(() => {
        key.classList.remove("playing1");
      }, 3000);
      setTimeout(() => {
        key.classList.remove("playing2");
      }, 1000);
    } else {
      allKey.forEach((key) => key.classList.add("otherkey"));
      setTimeout(() => {
        allKey.forEach((key) => key.classList.remove("otherkey"));
      }, 2000);
    }
  });
}
pressKey();

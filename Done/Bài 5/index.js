function clickPanels() {
  const panels = document.querySelectorAll(".panel");

  panels.forEach((panel) => {
    panel.addEventListener("click", function () {
      this.classList.toggle("open");
    });

    panel.addEventListener("transitionend", function (e) {
      if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
      }
    });
  });
}

clickPanels();

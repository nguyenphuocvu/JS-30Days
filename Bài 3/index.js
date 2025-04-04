function imgCorrection() {
  document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".controls input");
    const image = document.getElementById("img");

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        const suffix = input.dataset.sizing || "";
        const value = input.value + suffix;

        if (input.name === "spacing") {
          image.style.padding = value;
        } else if (input.name === "blur") {
          image.style.filter = `blur(${value})`;
        } else if (input.name === "base") {
          image.style.backgroundColor = value;
        }
      });
    });
  });
}

imgCorrection();

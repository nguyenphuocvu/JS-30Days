document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".controls input");
  const img = document.getElementById("img");
  const overlay = document.getElementById("overlay");

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const value = input.value + "px";
      const rora = input.value;

      if (input.name === "spacing") {
        img.style.padding = value;
      } else if (input.name === "blur") {
        img.style.filter = `blur(${value})`;
      } else if (input.name === "color") {
        img.style.backgroundColor = rora;
      } else if (input.name === "rorate") {
        img.style.transform = `rorate(${rora}deg)`;
      }
    });
  });

  function handleFileUpload(files) {
    Array.from(files).forEach((file) => {
      const url = URL.createObjectURL(file);

      const wrapper = document.createElement("div");
      wrapper.className = "image-wrapper";
      wrapper.style.position = "absolute";
      wrapper.style.top = "0px";
      wrapper.style.left = "0px";
      wrapper.innerHTML = `
            <div>
                <img src="${url}" class="uploaded-img" />
                <div class="resize-handle">
                    <div class="dot-resize top-left"></div>
                    <div class="dot-resize top-right"></div>
                    <div class="dot-resize bottom-left"></div>
                    <div class="dot-resize bottom-right"></div>
                </div>
            </div>
        `;

      overlay.appendChild(wrapper);
      handleDrag(wrapper);
      handleResize(wrapper);
    });
  }

  const overlayInput = document.getElementById("overlayInput");
  overlayInput.addEventListener("change", (e) => {
    handleFileUpload(e.target.files);
  });

  function clickImg(target) {
    target.addEventListener("click", (e) => {
      const handle = target.querySelector(".resize-handle");
      handle.classList.toggle("active");
    });
  }
  function handleDrag(target) {
    let isDragging = false;
    let offsetX, offsetY;
    clickImg(target);

    target.addEventListener("mousedown", (e) => {
      if (e.target.classList.contains("dot-resize")) return;

      isDragging = true;
      offsetX = e.clientX - target.offsetLeft;
      offsetY = e.clientY - target.offsetTop;

      document.addEventListener("mousemove", dragMove);
      document.addEventListener("mouseup", stopUp);
    });

    function dragMove(e) {
      if (!isDragging) return;
      target.style.left = `${e.clientX - offsetX}px`;
      target.style.top = `${e.clientY - offsetY}px`;
    }

    function stopUp() {
      isDragging = false;
      document.removeEventListener("mousemove", dragMove);
      document.removeEventListener("mouseup", stopUp);
    }
  }

  function handleResize(target) {
    const handle = target.querySelector(".resize-handle");
    const img = target.querySelector("img");
    const dots = handle.querySelectorAll(".dot-resize");
  
    let startX, startY, startWidth, startHeight;
    let isResizing = false;
  
    dots.forEach((dot) => {
      dot.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        startX = e.clientX;
        startWidth = img.offsetWidth;
        startHeight = img.offsetHeight;
        isResizing = true;
  
        const corner = dot.classList.contains("top-left")
          ? "top-left"
          : dot.classList.contains("top-right")
          ? "top-right"
          : dot.classList.contains("bottom-left")
          ? "bottom-left"
          : "bottom-right";
  
        document.addEventListener("mousemove", (event) =>
          resizeMove(event, corner)
        );
        document.addEventListener("mouseup", stopResize);
      });
    });
  
    function resizeMove(e, corner) {
      if (!isResizing) return;
  
      const diffX = e.clientX - startX;
      const diffY = e.clientY - startY;
  
      if (corner === "top-left") {
        img.style.width = `${startWidth - diffX}px`;
        img.style.height = `${startHeight - diffY}px`;
      } else if (corner === "top-right") {
        img.style.width = `${startWidth + diffX}px`;
        img.style.height = `${startHeight - diffY}px`;
        target.style.top = `${target.offsetTop + diffY}px`;
      } else if (corner === "bottom-left") {
        img.style.width = `${startWidth - diffX}px`;
        img.style.height = `${startHeight + diffY}px`;
        target.style.left = `${target.offsetLeft + diffX}px`;
      } else if (corner === "bottom-right") {
        img.style.width = `${startWidth + diffX}px`;
        img.style.height = `${startHeight + diffY}px`;
      }
    }
  
    function stopResize() {
      isResizing = false;
      document.removeEventListener("mousemove", resizeMove);
      document.removeEventListener("mouseup", stopResize);
    }
  }
  
});

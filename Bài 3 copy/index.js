document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".controls input");
  const img = document.getElementById("img");
  const overlay = document.getElementById("overlay");
  const resizeHandle = document.querySelector(".resize-handle");
  const overlayInput = document.getElementById("overlayInput");
  const dotResize = document.querySelectorAll(".dot-resize");

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
      } else if (input.name === "rotate") {
        img.style.transform = `rotate(${rora}deg)`;
      }
    });
  });

 
  overlayInput.addEventListener("change", (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const url = URL.createObjectURL(file);
  
        overlay.innerHTML += `
           <img src="${url}" class="uploaded-img" 
        
          <div class="resize-handle">
            <div class="dot-resize top-left"></div>
            <div class="dot-resize top-right"></div>
            <div class="dot-resize bottom-left"></div>
            <div class="dot-resize bottom-right"></div>
          </div>

          
        `;
        const dotResize = document.querySelectorAll(".dot-resize");
        dotResize.forEach((dot) => {
          dot.addEventListener("mousedown", handleMouseDown);
        });

      

        
      }
    }
  });
  


  function updateResizeHandlePosition() {
    const rect = overlay.getBoundingClientRect();
    resizeHandle.style.left = overlay.offsetLeft + "px";
    resizeHandle.style.top = overlay.offsetTop + "px";
    resizeHandle.style.width = overlay.offsetWidth + "px";
    resizeHandle.style.height = overlay.offsetHeight + "px";
  }

  overlay.addEventListener("load", updateResizeHandlePosition);
  overlay.addEventListener("click", () => {
    resizeHandle.style.display = "block";
    updateResizeHandlePosition();
  });

  
  let startX, startWidth;
  let isResizing = false;

  function handleMouseDown(e) {
    startX = e.clientX;
    startWidth = overlay.offsetWidth;
    isResizing = true;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }

  function handleMouseMove(e) {
    if (!isResizing) return;
    const diffX = e.clientX - startX;
    const newWidth = startWidth + diffX;
    overlay.style.width = `${newWidth}px`;
    updateResizeHandlePosition();
  }

  function handleMouseUp() {
    isResizing = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }

  dotResize.forEach((dot) => {
    dot.addEventListener("mousedown", handleMouseDown);
  });


  window.addEventListener("resize", updateResizeHandlePosition);
});

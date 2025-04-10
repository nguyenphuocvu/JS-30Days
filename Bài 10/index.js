const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
let lastChecked;
function handleCheck(e) {
  //kiểm tra xem họ có nhấn phím shift không
  //và kiểm tra xem họ có đang kiểm tra nó không
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    //hãy tiếp tục và làm những gì chúng ta muốn
    //lặp lại từng hộp kiểm
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
      console.log(checkbox);
    });
  }
  lastChecked = this;
}

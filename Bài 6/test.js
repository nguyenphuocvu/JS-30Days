// document.addEventListener("click", (e) => {
//   const activeInput = document.querySelector(".edit-city:not([disabled])");
//   if (activeInput) {
//     const listItem = activeInput.closest(".city-item");
//     const saveButton = listItem.querySelector(".save-btn");

//     // Kiểm tra nếu click bên ngoài vùng chỉnh sửa
//     if (!listItem.contains(e.target) && !e.target.classList.contains("save-btn")) {
//       activeInput.disabled = true; // Khóa chỉnh sửa
//       saveButton.style.display = "none"; // Ẩn nút "Lưu"
//     }
//   }
// });


https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json
const cities = [];


fetch("./cities.json")
  .then((response) => response.json())
  .then((data) => cities.push(...data));


function searchCity(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}


function displayCity() {
  const matchArray = searchCity(searchInput.value, cities);
  const html = matchArray
    .map((place) => `
      <li data-rank="${place.rank}" class="city-item" draggable="true">
        <input type="text" class="edit-city" value="${place.city}" disabled />
        <button class="edit-btn" type="button">Chỉnh sửa</button>
        <button class="delete-btn" type="button">Xóa</button>
        <div class="edit-form" style="display: none;" data-rank="${place.rank}">
          <label>Tên thành phố:</label>
          <input type="text" class="edit-city-name" value="${place.city}" />
          <label>Bang:</label>
          <input type="text" class="edit-state" value="${place.state}" />
          <label>Vĩ độ:</label>
          <input type="text" class="edit-lat" value="${place.latitude}" />
          <label>Kinh độ:</label>
          <input type="text" class="edit-long" value="${place.longitude}" />
          <button class="save-btn" type="button">Lưu</button>
        </div>
      </li>
    `)
    .join("");

  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");


searchInput.addEventListener("change", displayCity);
searchInput.addEventListener("keyup", displayCity);

suggestions.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
    const listItem = e.target.closest(".city-item");
    const editForm = listItem.querySelector(".edit-form");
    if (editForm) {
      editForm.style.display = "block";
    }
  }
});


suggestions.addEventListener("click", (e) => {
  if (e.target.classList.contains("save-btn")) {
    e.preventDefault();
    const editForm = e.target.closest(".edit-form");
    const rank = editForm.dataset.rank;
    const cityData = cities.find((city) => city.rank === rank);
    if (cityData) {
      cityData.city = editForm.querySelector(".edit-city-name").value;
      cityData.state = editForm.querySelector(".edit-state").value;
      cityData.latitude = editForm.querySelector(".edit-lat").value;
      cityData.longitude = editForm.querySelector(".edit-long").value;

      editForm.style.display = "none";
      displayCity();
    }
  }
});


suggestions.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const listItem = e.target.closest(".city-item");
    const rank = listItem.dataset.rank;

    const cityIndex = cities.findIndex((city) => city.rank === rank);
    if (cityIndex !== -1) {
      cities.splice(cityIndex, 1);
    }

    displayCity();
  }
});


let dragItem = null;

function handleDragDrop() {
  suggestions.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("city-item")) {
      dragItem = e.target;
      e.target.classList.add("dragging");
    }
  });

  suggestions.addEventListener("dragover", (e) => {
    e.preventDefault();
    const targetItem = e.target.closest(".city-item");
    if (targetItem && targetItem !== dragItem) {
      const bounding = targetItem.getBoundingClientRect();
      const offset = e.clientY - bounding.top;
      const midline = bounding.height / 2;

      if (offset > midline) {
        targetItem.after(dragItem);
      } else {
        targetItem.before(dragItem);
      }
    }
  });

  suggestions.addEventListener("drop", () => {
    dragItem?.classList.remove("dragging");
    dragItem = null;
  });

  suggestions.addEventListener("dragend", () => {
    dragItem?.classList.remove("dragging");
    dragItem = null;
  });
}


function handleDeleteDrag() {
  const deleteDrag = document.getElementById("delete-drag");

  deleteDrag.addEventListener("dragover", (e) => {
    e.preventDefault();
    deleteDrag.classList.add("over-trash");
  });

  deleteDrag.addEventListener("dragleave", () => {
    deleteDrag.classList.remove("over-trash");
  });

  deleteDrag.addEventListener("drop", (e) => {
    e.preventDefault();
    deleteDrag.classList.remove("over-trash");
    
    if (dragItem) {
      const rank = dragItem.dataset.rank;
      const index = cities.findIndex((c) => c.rank === rank);
      if (index !== -1) {
        cities.splice(index, 1);
        displayCity();
      } 
      dragItem = null;
    }
  });
}
//Kéo sang danh sách mới
function handleDropToNewList() {
  const isDropTarget = (target) =>
    target.classList.contains("new-drop-area") || target.id === "drop-target";

  document.addEventListener("dragover", (e) => {
    if (isDropTarget(e.target)) {
      e.preventDefault();
      e.target.classList.add("over");
    }
  });

  document.addEventListener("dragleave", (e) => {
    if (isDropTarget(e.target)) {
      e.target.classList.remove("over");
    }
  });

  document.addEventListener("drop", (e) => {
    if (isDropTarget(e.target)) {
      e.preventDefault();
      e.target.classList.remove("over");

      if (dragItem) {
        const targetList = e.target.querySelector("ul");
        if (targetList) {
          targetList.appendChild(dragItem);
        }
        dragItem = null;
      }
    }
  });
}


//Kéo lại danh sách chính
function handleDragDropToMainList() {
  document.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("city-item")) {
      dragItem = e.target;
      e.target.classList.add("dragging");
    }
  });

  document.addEventListener("dragover", (e) => {
    if (e.target.classList.contains("suggestions")) {
      e.preventDefault();
    }
  });

  document.addEventListener("drop", (e) => {
    if (e.target.classList.contains("suggestions")) {
      e.preventDefault();
      if (dragItem) {
        e.target.appendChild(dragItem);
        dragItem = null;
      }
    }
  });

  document.addEventListener("dragend", () => {
    if (dragItem) {
      dragItem.classList.remove("dragging");
      dragItem = null;
    }
  });
}
//Click Add
document.getElementById("add-list").addEventListener("click", (e) => {
  e.preventDefault();

  const newContainer = document.createElement("div");
  newContainer.classList.add("drop-area", "new-drop-area");

  const newList = document.createElement("ul");
  newList.classList.add("suggestions");

  newContainer.appendChild(newList);
  document.getElementById("new-list-container").appendChild(newContainer);
});

function main() {
  handleDragDropToMainList()
  handleDropToNewList()
  handleDeleteDrag();
  handleDragDrop();
}

main()

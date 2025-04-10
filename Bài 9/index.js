function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}
makeGreen();

//Regular || In ra thông tin kiểm tra debug bình thường 
console.log("hello");
//Interpolated
console.log("Hello I am a %s string!", "");

//Styled || Dùng để nhấn mạnh thông tin hoặc trang trí log khi cần.
console.log( 
  "%c I am some great text",
  "font-size: 50px; background: red ; text-shadow: 10px 10px 0 blue "
);

//warning! || Dùng khi bạn muốn cảnh báo người dùng hoặc lập trình viên nhưng không dừng chương trình.
console.warn("Ohh noo");
//Error:/ || Rất hữu ích để báo lỗi nghiêm trọng. Trong dev tools (trình duyệt), lỗi này dễ thấy hơn log thường.
console.error("shit!");
//Info Dùng để ghi chú thông tin hữu ích nhưng không phải cảnh báo hay lỗi.
console.info("Crocodiles eat 3-4 people per year");
//Testing ||  Cực kỳ tốt khi debug logic: chỉ in khi điều kiện không đúng.
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wrong!");
//Clearing || Hữu ích khi bạn muốn xem log mới nhất, không bị rối bởi log cũ.
console.clear();

//Viewing DOM Elements || Dùng để xem toàn bộ thuộc tính/method của phần tử DOM hoặc object.
console.log(p);
console.dir(p);

//Grouping together || Dùng nhiều khi lặp qua mảng, object, giúp log có cấu trúc rõ ràng
const dogs = [
  { name: "Snickers", age: 2 },
  { name: "Hugo", age: 3 },
];

dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.groupEnd(`${dog.name}`);
});

//counting || Dùng để đếm số lần 1 hàm hoặc hành động được gọi, ví dụ: số lần nhấn nút.
console.count("Wes");
console.count("Wes");
console.count("Wes");
console.count("Wes");
//timing || Rất hữu ích để kiểm tra hiệu suất hoặc thời gian chạy API, hàm xử lý lớn.

console.time("fetching data");
fetch(
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
)
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

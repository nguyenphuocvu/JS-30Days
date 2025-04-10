const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];



//Some và Every Checks
//Array.prototype.some() có ít nhất một người 19 tuổi không?
//Array.prototype.every() có tất cả mọi người 19 tuổi không?
const currentYear = new Date().getFullYear();


const isSomeone19 = people.some(person => currentYear - person.year >= 19);
console.log("Ít nhất một người 19 tuổi:", isSomeone19);


const isEveryone19 = people.every(person => currentYear - person.year >= 19);
console.log("Tất cả mọi người đều 19 tuổi:", isEveryone19);


const comments = [
    { text: "Love this", id: 523423 },
    { text: "Super good", id: 823423 },
    { text: "You are the best", id: 2039842 },
    { text: "Ramen in my fav food ever", id: 123523 },
    { text: "Nice Nice Nice", id: 542328 },
  ];
//Array.prototype.find()
//Find giống như filter, nhưng thay vào đó chỉ trả về kết quả bạn đang tìm kiếm

  
  // Tìm bình luận có id là 823423
  const comment = comments.find(c => c.id === 823423);
  console.log("Tìm được comment:", comment);
  
  // Tìm index của bình luận đó
  const index = comments.findIndex(c => c.id === 823423);
  console.log("Vị trí trong mảng:", index);
  
  // Xóa bình luận đó bằng splice (xóa tại vị trí index 1 phần tử)
  if (index !== -1) {
    comments.splice(index, 1);
  }
  
  console.log("Mảng sau khi xóa:", comments);
  
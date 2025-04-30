const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johnnes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

//Mảng prototype.filter() , //Mảng prototype.map()
//1. Lọc danh sách các nhà phát minh sinh vào năm 1500
function firstYear() {
  return inventors
    .filter((inventor) => inventor.year > 1500 && inventor.year < 1600)
    .map((inventor) => inventor.first + " " + inventor.last);
}

console.log(firstYear());
//Array.prototype.sort()
//3 Sắp xếp các nhà phát minh theo ngày sinh, từ già nhất đến trẻ nhất
const sortYear = inventors.sort( (a,b) => {
    if(a.year > b.year){
        return 1
    }else{
        return -1 
    }
})
console.log(sortYear);

//Array.prototype.reduce()
//4. Tất cả các nhà phát minh sống bao nhiêu năm?
function yearReduce() {
    return inventors.reduce((totalYears, inventor) => {
        return totalYears + (inventor.passed - inventor.year);
    }, 0); 
}

console.log(yearReduce()); 


  
//5 Sắp xếp các nhà phát minh theo năm sống
const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johnnes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  ];
  
const sortLifespan = inventors.sort((a, b) => {
    return (a.passed - a.year) - (b.passed - b.year);
});

console.log(sortLifespan);

//6. Reduce Exercise
//Sum up the instances of each of these

const data = [ ' car' , 'car' , 'truck', 'truck', 'bike', 'walk' , 'car', 
    'van', 'bike']

const couns =  data.reduce( (acc, item) => {
    acc[item] = (acc[item] || 0) + 1; 
    return acc;
}, {})

console.log(couns);

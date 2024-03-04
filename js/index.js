///Task 1
function calculateBMI(person) {
    const heightInMeters = person.height / 100
    const bmi = parseInt(person.weight / (heightInMeters * heightInMeters))
    return bmi
}
const person = {
    name: 'Max',
    height: 180,
    weight: 80
}
console.log(calculateBMI(person))

////Task 2
function findLongestWord(words) {
    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    }

    return longestWord;
}

const words = ['banana', 'pear', 'pineapple', 'strawberry'];
console.log(findLongestWord(words))

///Task 3
function createUser(name, age) {
    const user = {
        name: name,
        age: age
    };
    return user;
}
const user = createUser("Denny", 21);
console.log(user);

//Task 4
function filterProductsByPrice(products,maxPrice){
    const newFilterProducts = []
    for(const product of products){
        if(product.price < maxPrice){
            newFilterProducts.push(product)
        }
    }
    return newFilterProducts
}
const products = [
    { name: "Grape", price: 15 },
    { name: "Banana", price: 20 },
    { name: "Peach", price: 35 },
    { name: "Watermelon", price: 50 }
  ]
  console.log(filterProductsByPrice(products, 40))

///Task 5
function getFullName(person){
    return person.name + ' ' + person.surname
}
const user1 = {
    name: 'John',
    surname:'Smith'
}
console.log(getFullName(user1))

///Task 6
function sortByAge(people){
    people.sort((a,b) => a.age - b.age)
    return people
}
const people = [
    { name: 'Vasya', age: 33 },
    { name: 'Katya', age: 22 },
    { name: 'Dima', age: 14 }
  ]
  console.log(sortByAge(people))

///Task 7
function formatDate(dateObject) {
    return dateObject.year + '-' + dateObject.month + '-' + dateObject.day;
}

let dateObject = { year: 2024, month: 3, day: 4 };
console.log(formatDate(dateObject))

///Task 8
function calculateAverageGrade(student) {
    let sum = 0
    for(let i = 0; i < student.grades.length; i += 1){
        sum += student.grades[i]
    }
    const averageGrade = sum / student.grades.length
    return averageGrade
}
const student = {
    name: 'Jimmy',
    grades: [3, 5, 4, 5, 4]
  }
  console.log(calculateAverageGrade(student))

///Task 9
function findProductByName(products, name) {
    for (const product of products) {
      if (product.name === name) {
        return product;
      }
    }
  }
  
  const products2 = [
    { name: "Grapes", price: 15 },
    { name: "Peach", price: 20 },
    { name: "Orange", price: 35 },
    { name: "Banana", price: 50 }
  ];
  
  console.log(findProductByName(products2, "Banana")); 

///Task 10
function mergeObjects(obj1,obj2){
    const commonObjects = {}
    for(const key in obj1){
        commonObjects[key] = obj1[key]
    }
    for (const key in obj2) {
        commonObjects[key] = obj2[key];
      }
      return commonObjects
}
const obj1 = {name: 'John', surname:'Smith'}
const obj2 = {job:'engineer', age:'35'}
console.log(mergeObjects(obj1,obj2))

///Task 11
function filterByCategory(products, category) {
    const filteredProducts = []
    for(const product of products){
        if(product.category === category){
            filteredProducts.push(product)
        }
    }
    return filteredProducts
}
const products3 = [
    { name: 'onion', category: 'vegetable', price: 25 },
    { name: 'banana', category: 'fruit', price: 30 },
    { name: 'potato', category: 'vegetable', price: 15 },
    { name: 'melon', category: 'fruit', price: 20 },
    { name: 'grapes', category: 'fruit', price: 10 }
]
console.log(filterByCategory(products3,'vegetable'))
  

  




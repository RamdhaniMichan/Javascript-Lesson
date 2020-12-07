//Built in function Javascript

//1. Concat 
//Method ini menggabungkan dua array atau lebih tanpa mengubah nilai array aslinya

// let number = [1, 2, 3, 4, 5]
// let number1 = [6, 7, 8, 9, 10]

// let mergeNumber = number.concat(number1)

// console.log(mergeNumber)

//2. Unshift
//Method ini menambahkan item baru ke baris paling pertama

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon", "Grape")

// console.log(fruits)

//3. toString
//Method ini menkonversi type data apapun ke dalam string

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let str = fruits.toString()

// console.log(str)

//4. toLowerCase
//Method ini menkonversi huruf besar ke kecil

// let str = "HELLO WORLD"
// let res = str.toLowerCase()

// console.log(res)

//5. Slice
//Method ini mengekstrak bagian dari dalam string

// let str = "Hello World"
// let res = str.slice(0, 5)

// console.log(res)

//6. Repeat
//Method ini menggandakan string sesuai dengan jumlah yang ditentukan

// let str = "Hello World"

// console.log(str.repeat(2))

//7. Include
/*Method ini memeriksa apakah dalam array terdapat satu kata yang ditetapkan, 
dan akan mengengembalikan nilai true jika data tersedia, false jika data tidak ada*/

// const fruits = ["Banana", "Apple", "Grape", "Mango"]

// console.log(fruits.includes("Grape"))

//8. Push
//Method ini menambahkan array baru ke baris paling akhir

// const fruits = ["Banana", "Apple", "Grape", "Mango"]
// fruits.push("Orange")

// console.log(fruits)

//9. Pop
//Method ini menghapus baris array paling akhir

// const fruits = ["Banana", "Apple", "Grape", "Mango"]

// console.log(fruits.pop())

// console.log(fruits)

//10. Replace
//Method ini mengubah string sesuai dengan yang ditetapkan

const str = "Purwakarta"
let res = str.replace(/a/g , "o")

console.log(res)




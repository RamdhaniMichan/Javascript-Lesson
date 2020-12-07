let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
        {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}
    
//Spread Operator
const user = {...data}
user.name = "Ramdhani Michandari"
user.username = "Michan"
user.email = "ramdhani.michan48@gmail.com"
user.hobbies = ["Desain", "Membaca", "Traveling", "Renang"]

//Destruction Operator
const {street, city} = data.address

//Output
console.log(user)

console.log({street, city})
const api = `https://jsonplaceholder.typicode.com/users`

fetch(api)
    .then(response => {
        return response.json()
    })
    .then(data => {
        const showName = data.map((person) => {
            return person.name
        })
        
        
        for(propertyName in showName){
            console.log(showName[propertyName])
        }
    })
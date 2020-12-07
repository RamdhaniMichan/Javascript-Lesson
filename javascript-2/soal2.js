const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]

function searchName(value, len, callback ){
    for(let i = 0; i < len; i++){
        const filterName = name.filter((names) => {
            return names.toLowerCase().includes(value)
        })
        
        callback(filterName[i], len)
    }
}

function showFilter(query){
    console.log(query)
}

searchName("an", 3, showFilter)







    
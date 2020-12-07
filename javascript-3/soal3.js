//1. cari nama
const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]

function searchName(value){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                const checkName = name.filter((names) => {
                    return names.toLowerCase().includes(value)
                })

                if(checkName){
                    resolve(checkName)
                } else {
                    reject(new Error("Data tidak ada"))
                }
        }, 1500)
    })
}


// searchName("ca")
//     .then(result => {console.log(result)})
//     .catch(err => {console.log(err)})

// console.log("Mencari nama ... ?")

// async function getName(value){
//     try{
//         const name = await searchName(value)

//         console.log(name)
//     } catch(err){
//         console.log(err)
//     }
// }

// getName("an")




//2. Tampilkan bulan

function getMonth(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false
            const month = ["Januari", "Febuari", "Maret", "April", 
            "Mei","Juni", "Juli", "Agustus", 
            "September", "Oktober","November", "Desember"
            ]

            if(!error){
                const showMonth = month.map((name) => {
                    return name
                })

                resolve(showMonth)
            } else {
                reject(new Error("Sorry Data Not Found", []))
            }

        }, 1000)
    })
}

getMonth()
    .then(res => {console.log(res)})
    .catch(err => {console.log(err.message)})

// console.log("Cetak Bulan")

// async function showMonth(){
//     try {
//         const month = await getMonth()

//         console.log(month)
//     } catch(err) {
//         console.log(err.message)
//     }
// }

// showMonth()


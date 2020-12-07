const getMonth = (callback) => {
    setTimeout(() => {
        let error = true
        let month = ["Januari", "Febuari", "Maret", "April", 
                     "Mei","Juni", "Juli", "Agustus", 
                     "September", "Oktober","November", "Desember"
                    ]
        
        if(!error){
            callback(null, month)
        } else {
            callback(new Error("Sorry Data Not Found", []))
        }
    }, 1000)
}

function showMonth(e1, e2){
    
    if(e1 != null){
        console.log(e1.message)
    } else {
        const getAll = e2.map((item) => {
            return item
        })
    
        console.log(getAll)
    }
    
}

getMonth(showMonth)



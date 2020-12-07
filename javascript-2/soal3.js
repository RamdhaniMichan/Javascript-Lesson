function rangeArrayNumber(fisrtNumber, endNumber, arrayNumber, callback){
    if(typeof fisrtNumber == "number" && typeof endNumber == "number"){
        if(fisrtNumber < endNumber){
            if(Array.isArray(arrayNumber)){
                if(arrayNumber.length > 5){
                    const checkNumber = arrayNumber.filter((number) => {
                        return number > fisrtNumber && number < endNumber
                    })
    
                    checkNumber.sort((a, b) => {
                        return a - b
                    })
    
                    callback(checkNumber)                
                } else {
                    console.log("Min length 5")   
                }
            } else {
                console.log("Not Array")
            }
        } else {
            console.log("firstNumber must be small than endNumber")
        }
    } else {
        console.log("Data Not a number")
    }
}

function showArrayNumber(show){
    console.log(show)
    
}

rangeArrayNumber(5, 20, [5, 6, 16, 18], showArrayNumber)



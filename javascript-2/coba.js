function myDisplayer(file){
    document.getElementById("app").innerHTML = file
}

function getFile(myCallback){
    let req = new XMLHttpRequest()
    req.open('GET', 'coba.txt')
    req.onload = function() {
        if (req.status == 200){
            myCallback(this.responseText)
        } else {
            myCallback(`Error : ${req.status}`)
        }
    }
    req.send()
}

getFile(myDisplayer)
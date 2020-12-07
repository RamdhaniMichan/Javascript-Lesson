function devideAndSort(value) {

    if (typeof value != "number") {
        console.log("Inputan harus number !!!")
        return
    }

    const convert = value.toString().split(0)

    const loop = convert.forEach((item) => {
        let obj = Array.from(item)

        let sort = obj.sort()

        let merge = sort.map((i) => {
            return console.log(Number(i))
        })
        

        return

    })

}

devideAndSort(4168907620667087)
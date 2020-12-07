const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at"]
            let cek = dataDay.find((item) => {
                return item == day
            })

            if (cek){
                resolve(cek)
            } else {
                reject(new Error("Hari ini bukan hari kerja"))
            }
        }, 3000)
    })
}

// cekHariKerja("Minggu")
//     .then(result => {console.log(result)})
//     .catch(error => {console.log(error.message)})


async function inputHari(value){
    try {
        const getDay = await cekHariKerja(value)

        console.log(`Hari ${getDay}, waktunya kerja`)
    } catch (error) {
        console.log(error.message)
    }
}

inputHari("Senin")
const mtk = 80
const bhsIndonesia = 90
const bhsInggris = 90
const ipa = 95

if(mtk > 0 && bhsIndonesia > 0 && bhsInggris > 0 && ipa > 0){
    
    let hitungTambah = mtk + bhsIndonesia + bhsInggris + ipa
    let hitungBagi = hitungTambah / 4
    let rataRata = Math.round(hitungBagi)

    console.log(`Nilai = ${rataRata}`)

    if(rataRata >= 90 && rataRata <= 100){
        console.log("Grade A")
    } else if(rataRata >= 80 && rataRata <= 89){
        console.log("Grade B")
    } else if(rataRata >= 70 && rataRata <= 79){
        console.log("Grade C")
    } else if(rataRata >= 60 && rataRata <= 69){
        console.log("Grade D")
    } else if(rataRata >= 0 && rataRata <= 59){
        console.log("Grade E")
    } else {
        console.log("Nilai yang dimasukan salah")
    }
} else {
    console.log("Semua nilai harus diisi")
}
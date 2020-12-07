function checkPalindrome(str) {

    if (typeof str != "string") {
        console.log("inputan harus huruf !!!")
        return
    }

    if(str.length < 3){
        console.log("harus lebih dari 3 karakter !!!")
        return
    }

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return `string "${str}" itu bukan palindrome`
        }
    }
    return `string "${str}" itu palindrome`
}


console.log(checkPalindrome("air"))
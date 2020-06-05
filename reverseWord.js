function reverseWord(txt){
    if (txt.length <= 1) {
        let message = {
            kode : '500',
            msg  : 'Inputan tidak valid'
        }

        return message
    } else {
        var teks = txt.split(' ').reverse().join(' ');
        let data = {
            msg : teks
        }
        return data
    }
}

console.log(reverseWord(''))
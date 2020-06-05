function reverseWord(txt){
    if (txt.length <= 1) {
        let message = {
            kode : '500',
            msg  : 'Inputan tidak valid'
        }
    } else {
        var teks = txt.split(' ').reverse().join(' ');
        return teks
    }
}

console.log(reverseWord('Saya Belajar JavaScript'))
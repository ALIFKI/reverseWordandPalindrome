function reverseWord(txt){
    //validasi inputan supaya tidak kosong
    if (txt.length <= 1) {
        //variable jika terjadi inputa error
        let message = {
            kode : '500',
            msg  : 'Inputan tidak valid'
        }
        return message
    } else {
        //Memisahkan string jadi array,dibalik kemudian digabungkan kembali
        var teks = txt.split(' ').reverse().join(' ');
        //Pesan jika berhasil reverse
        let data = {
            msg : teks
        }
        return data
    }
}

console.log(reverseWord(''))
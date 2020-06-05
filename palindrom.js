function checkPalindrom(parm1){
    if (parm1.length <= 1) {
        return 'Input tidak valid'
    } else {
        var valid = parseInt(parm1)
        if (valid) {
            let message = {
                kode : 'Failed',
                msg  : 'Input tidak boleh mengandung angka' 
            }
    
            return message
        }
        else{
            let teks = parm1;
            var arrysplit = teks.split('');
            var revers = arrysplit.reverse().join('');
            // var x = arrysplit.length - 1;
            // for (let i = x; i >= 0; i--) {
            //     revers.push(teks[i])
            // }
    
            if (revers === teks) {
                return 'Palindorme'
            }
            else{
                return 'Bukan Palindrome'
            }
    
        }
    }
}

console.log(checkPalindrom('malam'))
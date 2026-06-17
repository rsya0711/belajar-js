const username = "   fIkRi_bAihAQi73   ";

const usernameBenar = username
.trim() //menghapus spasi
.toLowerCase() //huruf kecil
.replace("_", "-") // ganti 
console.log (usernameBenar.length); // ngitung panjang
console.log (usernameBenar);

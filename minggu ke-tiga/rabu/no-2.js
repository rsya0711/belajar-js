const kalimat = "JavaScript adalah bahasa pemrograman yang sangat menyenangkan";

let jumlahKarakter = 0;
const perubahan = kalimat 
.length
jumlahKarakter = perubahan;

let jumlahKata = 0;
const perubahan2 = kalimat.split(" ")
.length
jumlahKata = perubahan2;

const awalAkhir = kalimat.split(" ");




console.log (jumlahKarakter);
console.log (jumlahKata);
console.log(awalAkhir[0]);
console.log (awalAkhir[awalAkhir.length-1]);
console.log (awalAkhir.includes("pemrograman"))
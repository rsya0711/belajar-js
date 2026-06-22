const peserta = [
{
    nama: "Ari",
    tanggalLahir: "2007-03-15",
    nilai: [80, 90, 75],
    penghasilanOrtu: 3500000
},
{
    nama: "Bima",
    tanggalLahir: "2006-08-22",
    nilai: [60, 70, 85],
    penghasilanOrtu: 1500000
},
{
    nama: "Citra",
    tanggalLahir: "2007-01-10",
    nilai: [95, 88, 92],
    penghasilanOrtu: 7000000
}
];


const hasil = [];



function hitungUmur(tanggalLahir){

    const lahir = new Date(tanggalLahir);
    const sekarang = new Date();

    const umur = sekarang.getFullYear() - lahir.getFullYear();

    return umur;
}

for (const {nama, tanggalLahir, nilai, penghasilanOrtu} of peserta){

    const umur = hitungUmur(tanggalLahir);

    let total = 0;
    for (const angka of nilai){
        total = total + angka;}
    
    const rataRata = total / nilai.length;

if( umur >= 18 && rataRata >= 70 && penghasilanOrtu >= 0
    ){
        status = "Lolos";
        alasan = "Peserta memenuhi kriteria";
        }
        else{
            status = "tidak lolos";
            alasan = ("tidak memenuhi kriteria");
        }
    

    hasil.push({
        nama, 
        umur, 
        rataRata, 
        penghasilanOrtu, 
        status, 
        alasan});

    hasil.sort
    (function(a,b){
    return b.rataRata - a.rataRata;
});
}

for(let i = 0; i < hasil.length; i++){

console.log("Ranking " + (i + 1));
console.log("Nama : " + hasil[i].nama);
console.log("Umur : " + hasil[i].umur);
console.log("Rata-rata : " + hasil[i].rataRata.toFixed(0));
console.log("Penghasilan : " + hasil[i].penghasilanOrtu);
console.log("Status : " + hasil[i].status);
console.log("Alasan : " + hasil[i].alasan);
console.log ("");
}

const terbaik = hasil[0];
console.log("terbaik");

console.log(terbaik.nama + " dengan rata rata nilai " + terbaik.rataRata.toFixed(0)
);
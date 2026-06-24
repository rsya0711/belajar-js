const siswa = [
    {
        id: 1,
        nama: "Ari",
        umur: 17,
        nilai: 85
    },
    {
        id: 2,
        nama: "Bima",
        umur: 18,
        nilai: 72
    },
    {
        id: 3,
        nama: "Citra",
        umur: 17,
        nilai: 95
    },
    {
        id: 4,
        nama: "Dewi",
        umur: 16,
        nilai: 68
    }
];

let tertinggi = siswa[0];
let terendah = siswa[0];
let total = 0;

for(const data of siswa){
    total = total + data.nilai;

    if(data.nilai > tertinggi.nilai){
        tertinggi = data;
    }

    if(data.nilai < terendah.nilai){
        terendah = data;
    }
}

let rataRata = total / siswa.length;

console.log("Nilai tertinggi");
console.log(tertinggi.nama + " : " + tertinggi.nilai);

console.log("Nilai terendah");
console.log(terendah.nama + " : " + terendah.nilai);

console.log("Rata-rata : " + rataRata);
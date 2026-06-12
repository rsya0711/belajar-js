
const nilaiSiswa = {
    Andi: 80,
    Budi: 90,
    Citra: 75,
    Dewi: 88
};

console.log("nama siswa:");

for (const nama in nilaiSiswa) {
    console.log(nama);
}


console.log("nilai siswa:");

for (const nama in nilaiSiswa) {
    console.log(nilaiSiswa[nama]);
}

let total = 0;
let jumlahSiswa = 0;

for (const nama in nilaiSiswa) {
    total += nilaiSiswa[nama];
    jumlahSiswa++;
}

console.log("rata-rata:");
console.log(total / jumlahSiswa);


let nilaiTertinggi = 0;
let siswaTertinggi = "";

for (const nama in nilaiSiswa) {
    if (nilaiSiswa[nama] > nilaiTertinggi) {
        nilaiTertinggi = nilaiSiswa[nama];
        siswaTertinggi = nama;
    }
}

console.log("nilai nertinggi:");
console.log(siswaTertinggi + " : " + nilaiTertinggi);
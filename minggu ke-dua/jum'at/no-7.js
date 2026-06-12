const penjualan = {
    Januari: 100000,
    Februari: 120000,
    Maret: 90000,
    April: 150000
};

let total = 0;
let jumlahBulan = 0;

for (const bulan in penjualan) {
    total += penjualan[bulan];
    jumlahBulan++;
}

console.log("total penjualan:");
console.log(total);


let rataRata = total / jumlahBulan;

console.log("rata-rata penjualan:");
console.log(rataRata);


let bulanTertinggi = "";
let penjualanTertinggi = 0;

for (const bulan in penjualan) {
    if (penjualan[bulan] > penjualanTertinggi) {
        penjualanTertinggi = penjualan[bulan];
        bulanTertinggi = bulan;
    }
}

console.log("penjualan tertinggi:");
console.log(bulanTertinggi + " : " + penjualanTertinggi);
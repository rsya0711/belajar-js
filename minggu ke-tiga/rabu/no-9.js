const namaBarang = "Laptop Gaming";
const hargaBarang = "15749999.95";
const diskon = 12.5;

const harga = Number(hargaBarang);
const namaKapital = namaBarang.toUpperCase();
const nominalDiskon = harga * diskon / 100;
const hargaAkhir = harga - nominalDiskon;

console.log("Nama barang ", namaKapital);
console.log("Harga asli ", harga.toFixed(2));
console.log("Diskon ", diskon + "%");
console.log("Nominal diskon ", nominalDiskon.toFixed(2));
console.log("Harga setelah diskon ", hargaAkhir.toFixed(2));
console.log("Harga akhir ", hargaAkhir.toFixed(2));
const kendaraan = {
    nomorPolisi: "B 1224 SZL",
    waktuMasuk: "2026-06-18 09:00",
    waktuKeluar: "2026-06-18 17:00"
};

const masuk = new Date(kendaraan.waktuMasuk);
const keluar = new Date(kendaraan.waktuKeluar);

const selisih = keluar - masuk;

const lamaParkir = Math.ceil(
    selisih / (1000 * 60 * 60)
);

let biaya;

if (lamaParkir <= 2) {
    biaya = 3000;

} else {
    biaya = 3000 + ((lamaParkir - 2) * 2000);
}

console.log("PARKIR");
console.log("Nomor Polisi :", kendaraan.nomorPolisi);
console.log("Masuk        :", kendaraan.waktuMasuk);
console.log("Keluar       :", kendaraan.waktuKeluar);
console.log("Lama parkir  :", lamaParkir + " jam");
console.log("Total biaya  : Rp" + biaya);
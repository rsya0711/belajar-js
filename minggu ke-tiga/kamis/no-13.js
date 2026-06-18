const acara = "Seminar JavaScript";
const tanggalAcara = "2026-12-01";

const sekarang = new Date();
const tanggalTujuan = new Date(tanggalAcara);
const selisih = tanggalTujuan - sekarang;

const hari = Math.floor(
    selisih / (1000 * 60 * 60 * 24));

const jam = Math.floor(
    selisih / (1000 * 60 * 60)
);

console.log("INFO ACARA");
console.log("Nama Acara :", acara);
console.log( "Menuju acara :", hari + " hari lagi");
console.log( "Atau ", jam + " jam lagi");
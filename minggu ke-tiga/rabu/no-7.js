const input = "89.75";

const nilai = Number(input);

console.log("data sebelum:", typeof input);
console.log("data sesudah:", typeof nilai);

const bulat = Number(nilai.toFixed(0));
console.log("Hasil pembulatan:", bulat);

if (nilai === bulat) {
    console.log("Bilangan bulat");
} else {
    console.log("Bukan bilangan bulat");
}
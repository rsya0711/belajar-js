const angka = [10, 5, 31];

console.log("array:");

for (const isi of angka) {
    console.log(isi);
}
console.log("=> array termasuk iterable");



const nama = "Jamal";

console.log("string:");

for (const huruf of nama) {
    console.log(huruf);
}
console.log("=> string termasuk iterable");




const mahasiswa = {
    nama: "Jamal",
    umur: 20
};

console.log("object:");

for (const data in mahasiswa) {
    console.log(data);
}
console.log("=> object termasuk non-iterable");
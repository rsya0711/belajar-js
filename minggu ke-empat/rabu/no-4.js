const siswa = [
    {
        id:1,
        nama:"Ari",
        umur:17,
        nilai:85
    },
    {
        id:2,
        nama:"Bima",
        umur:18,
        nilai:72
    }
];

let jsonSiswa = JSON.stringify(siswa);

console.log("JSON STRING");
console.log(jsonSiswa);

let objectSiswa = JSON.parse(jsonSiswa);

console.log("OBJECT");
console.log(objectSiswa);
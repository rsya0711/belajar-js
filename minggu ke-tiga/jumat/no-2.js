const nilai = [85, 92, 78, 95, 88];

const [pertama, kedua , , , terakhir] = nilai;{

console.log (pertama);
console.log (kedua);
console.log (terakhir)
}

function sisaNilai(...nilaiSimpan){
    console.log ("sisa nilai :", nilaiSimpan );}

sisaNilai("78", "95");



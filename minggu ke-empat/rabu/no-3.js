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
siswa.push({
    id:5,
    nama:"Eko",
    umur:18,
    nilai:90
});

function cariSiswa(nama){
    for(const data of siswa){
        if(data.nama === nama){
            return data;
        }
    }

    return "Siswa tidak ditemukan";
}

console.log(cariSiswa("Eko"));
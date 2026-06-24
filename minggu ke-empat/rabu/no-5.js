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
    },
    {
        id:5,
        nama:"Eko",
        umur:18,
        nilai:90
    }
];

for(let i = 0; i < siswa.length; i++){
    for(let j = i + 1; j < siswa.length; j++){
        if(siswa[i].nilai < siswa[j].nilai){
            let simpan = siswa[i];
            siswa[i] = siswa[j];
            siswa[j] = simpan;
        }
    }
}

for(let i = 0; i < siswa.length; i++){

    console.log(
        "Peringkat " + (i + 1) + " : " + siswa[i].nama +" (" + siswa[i].nilai +")"
    );
}
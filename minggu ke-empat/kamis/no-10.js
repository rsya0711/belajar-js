function ambilPengguna() {

    return new Promise(function(resolve) {
        setTimeout(function() {
            let pengguna = {
                id: 1,
                nama: "Budi",
                premium: true
            };

            resolve(pengguna);
        }, 2000);
    });
}

function ambilKursus() {

    return new Promise(function(resolve) {
        setTimeout(function() {
            let kursus = [
                "JavaScript Dasar",
                "React",
                "Node.js"
            ];

            resolve(kursus);
        }, 3000);
    });
}

function ambilNilaiSiswa() {

    return new Promise(function(resolve) {
        setTimeout(function() {
            let nilai = {
                nama: "Budi",
                nilai: 90
            };
            resolve(nilai);
        }, 2000);
    });
}

async function tampilkanData() {

    let hasil = await Promise.all([
        ambilPengguna(),
        ambilKursus(),
        ambilNilaiSiswa()
    ]);

    console.log("DATA PENGGUNA");
    console.log("Nama :", hasil[0].nama);
    console.log("Premium :", hasil[0].premium);
    console.log("DAFTAR KURSUS");


    for (const kursus of hasil[1]) {

        console.log("-", kursus);

    }


    console.log("NILAI SISWA");
    console.log("Nama :", hasil[2].nama);
    console.log("Nilai :", hasil[2].nilai);
}

tampilkanData();
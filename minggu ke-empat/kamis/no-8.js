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

async function tampilkanData() {

    let waktuMulai = Date.now();

    let hasil = await Promise.all([
        ambilPengguna(),
        ambilKursus()
    ]);

    let waktuSelesai = Date.now();

    console.log("Data Pengguna:");
    console.log(hasil[0]);
    console.log("Daftar Kursus:");
    console.log(hasil[1]);
    console.log("Total waktu:",(waktuSelesai - waktuMulai) / 1000,"detik");
}

tampilkanData();
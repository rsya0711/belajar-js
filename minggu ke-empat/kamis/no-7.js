function ambilKursus() {

    return new Promise(function(resolve, reject) {

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

async function tampilkanKursus() {
    let daftarKursus = await ambilKursus();
    console.log("Daftar Kursus:");

    for (const kursus of daftarKursus) {
        console.log(kursus);
    }
}

tampilkanKursus();
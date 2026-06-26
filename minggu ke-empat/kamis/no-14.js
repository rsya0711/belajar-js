function ambilProfil() {

    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Profil Budi");
        }, 2000);
    });
}

function ambilKursus() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve([
                "JavaScript",
                "React",
                "Node.js"
            ]);
        }, 3000);
    });
}

function ambilNilai() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(90);
        }, 1000);
    });
}

async function versiA() {

    let mulai = Date.now();

    let profil = await ambilProfil();

    let kursus = await ambilKursus();

    let nilai = await ambilNilai();

    let selesai = Date.now();

    console.log("VERSI A");
    console.log("Profil:");
    console.log(profil);
    console.log("\nKursus:");
    console.log(kursus);
    console.log("Nilai:");
    console.log(nilai);
    console.log("Waktu:",(selesai - mulai) / 1000,"detik");
}

versiA();

// VERSI B 
function ambilProfil() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Profil Budi");
        }, 2000);
    });
}

function ambilKursus() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve([
                "JavaScript",
                "React",
                "Node.js"
            ]);

        }, 3000);
    });
}

function ambilNilai() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(90);
        }, 1000);
    });
}

async function versiB() {

    let mulai = Date.now();

    let hasil = await Promise.all([

        ambilProfil(),
        ambilKursus(),
        ambilNilai()
    ]);

    let selesai = Date.now();

    console.log("VERSI B");
    console.log("Profil:");
    console.log(hasil[0]);
    console.log("Kursus:");
    console.log(hasil[1]);
    console.log("Nilai:");
    console.log(hasil[2]);
    console.log( "Waktu:",(selesai - mulai) / 1000,"detik");
}

versiB();

// versi A dijalanin nya satu satu sedangkan versi B dijalanin nya bareng 
// versi A lebih membutuhkan waktu untuk eksekusi kode, sedangkan versi B lebih cepat 
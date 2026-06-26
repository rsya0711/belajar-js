function ambilProfil(id) {

    return new Promise(function(resolve, reject) {

        let pengguna = [
            { id: 1, nama: "Budi", umur: 17 },
            { id: 2, nama: "Ani", umur: 18 },
            { id: 3, nama: "Dodi", umur: 19 }
        ];

        setTimeout(function() {
            let hasil = null;
            for (const user of pengguna) {
                if (user.id === id) {
                    hasil = user;
                }
            }

            if (hasil !== null) {
                resolve(hasil);
            } else {
                reject("Profil tidak ditemukan");
            }
        }, 2000);
    });
}

async function tampilkanProfil(id) {
    try {
        let profil = await ambilProfil(id);
        console.log("Profil pengguna:");
        console.log(profil);

    } catch (error) {
        console.log("Error:", error);

    } finally {
        console.log("Proses telah selesai");
    }
}

tampilkanProfil(1);
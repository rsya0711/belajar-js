function ambilPengguna(id) {

    return new Promise(function(resolve, reject) {

        let pengguna = [
            { id: 1, nama: "Budi", premium: true },
            { id: 2, nama: "Ani", premium: false },
            { id: 3, nama: "Dodi", premium: true }
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
                reject("Pengguna tidak ditemukan");
            }
        }, 2000);
    });
}

async function tampilkanPengguna() {
    try {
        let data = await ambilPengguna(1);
        console.log("Data Pengguna:");
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}
tampilkanPengguna();
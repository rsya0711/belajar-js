function ambilNilaiSiswa(id) {

    return new Promise(function(resolve, reject) {

        let siswa = [
            { id: 1, nilai: 90 },
            { id: 2, nilai: 75 },
            { id: 3, nilai: 60 }
        ];

        setTimeout(function() {
            let hasil = null;

            for (const data of siswa) {
                if (data.id === id) {
                    hasil = data;
                }
            }

            if (hasil !== null) {
                resolve(hasil);
            } else {
                reject("Data siswa tidak ditemukan");
            }
        }, 2000);
    });
}

async function cekKelulusan(id) {
    try {
        let data = await ambilNilaiSiswa(id);
        console.log("Nilai Siswa:", data.nilai);

        if (data.nilai >= 75) {
            console.log("Status: Lulus");

        } else {
            console.log("Status: Tidak Lulus");
        }

    } catch (error) {
        console.log("Error:", error);
    }
}

cekKelulusan(1);
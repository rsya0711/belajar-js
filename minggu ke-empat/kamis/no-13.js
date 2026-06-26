function login() {

    return new Promise(function(resolve, reject) {


        setTimeout(function() {

            let berhasil = true;


            if (berhasil) {

                resolve({
                    id: 1,
                    nama: "Budi"
                });

            } else {

                reject("Login gagal");

            }


        }, 2000);


    });

}




function ambilProfil(user) {

    return new Promise(function(resolve, reject) {

        setTimeout(function() {

            let profil = {
                nama: user.nama,
                umur: 17
            };

            resolve(profil);
        }, 1500);
    });
}

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

function ambilNilai() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let nilai = 90;
            resolve(nilai);
        }, 1000);
    });
}

async function prosesBelajar() {

    try {

        let user = await login();

        console.log("Login berhasil:", user.nama);

        let profil = await ambilProfil(user);

        console.log("Profil:");
        console.log(profil);

        let kursus = await ambilKursus();
        
        console.log("Kursus:");
        console.log(kursus);

        let nilai = await ambilNilai();
    
        console.log("Nilai:", nilai);
        console.log("Semua proses selesai");

    } catch (error) {
        console.log("Error:", error);
    }
}

prosesBelajar();
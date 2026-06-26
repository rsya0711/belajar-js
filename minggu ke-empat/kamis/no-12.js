function login(username, password) {

    return new Promise(function(resolve, reject) {

        let pengguna = {
            username: "budi123",
            password: "12345",
            nama: "Budi",
            premium: true
        };

        setTimeout(function() {

            if (username === pengguna.username && password === pengguna.password) {
                resolve(pengguna);

            } else {
                reject("Username atau password salah");
            }
        }, 2000);
    });
}

function cekStatusPengguna(data) {
    return new Promise(function(resolve) {
        setTimeout(function() {

            if (data.premium === true) {
                resolve("Mengakses fitur premium...");

            } else {
                resolve("Fitur premium tidak tersedia.");
            }
        }, 1000);
    });
}

async function masukAplikasi() {

    try {
        let pengguna = await login("budi123", "12345");
        console.log("Selamat datang, " + pengguna.nama);

        let status = await cekStatusPengguna(pengguna);
        console.log(status);

    } catch (error) {
        console.log(error);
    }
}

masukAplikasi();
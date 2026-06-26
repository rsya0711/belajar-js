function login(username, password) {

    return new Promise(function(resolve, reject) {

        let user = {
            username: "budi123",
            password: "12345",
            nama: "Budi"
        };

        setTimeout(function() {
            if (username === user.username && password === user.password) {
                resolve("Selamat datang, " + user.nama);

            } else {
                reject("Username atau password salah");
            }
        }, 2000);
    });
}

async function prosesLogin() {
    try {
        let hasil = await login("budi123", "12345");
        console.log(hasil);

    } catch (error) {
        console.log(error);
    }
}

prosesLogin();
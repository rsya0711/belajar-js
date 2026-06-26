const platform = {

    login: function(username, password) {

        return new Promise(function(resolve, reject) {
            setTimeout(function() {

                let user = {
                    id: 1,
                    nama: "Budi",
                    premium: true
                };

                if (username === "budi123" && password === "12345") {
                    resolve(user);

                } else {
                    reject("Login gagal");
                }
            }, 2000);
        });
    },

    ambilProfil: function(user) {

        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve({
                    nama: user.nama,
                    premium: user.premium
                });
            }, 1500);
        });
    },

    ambilKursus: function() {

        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve([
                    "JavaScript Dasar",
                    "React",
                    "Node.js"
                ]);

            }, 3000);
        });
    },

    ambilNilai: function() {

        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve(90);
            }, 1000);
        });
    },

    tampilkanDashboard: async function() {

        try {
            let user = await this.login(
                "budi123",
                "12345"
            );

            let hasil = await Promise.all([

                this.ambilProfil(user),
                this.ambilKursus(),
                this.ambilNilai()
            ]);

            console.log("DASHBOARD");
            console.log("Nama:", hasil[0].nama);
            console.log("Status Premium:",hasil[0].premium);
            console.log("Daftar Kursus:");

            for (const kursus of hasil[1]) {
                console.log("-", kursus);
            }

            console.log("Nilai:");
            console.log(hasil[2]);

        } catch(error) {
            console.log("Error:", error);
        }
    }
};

platform.tampilkanDashboard();
function buatLoginSystem() {

    let loginBerhasil = 0;
    let loginGagal = 0;


    function berhasil() {
        loginBerhasil++;
        console.log("Login berhasil");
    }

    function gagal() {
        loginGagal++;
        console.log("Login gagal");
    }

    function statistik() {
        console.log("STATISTIK LOGIN");
        console.log("Login berhasil :", loginBerhasil);
        console.log("Login gagal    :", loginGagal);
    }
    return {
        berhasil,
        gagal,
        statistik
    };
}

const login = buatLoginSystem();

login.berhasil();
login.gagal();
login.statistik();
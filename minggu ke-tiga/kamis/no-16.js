function buatLogger() {

    let riwayat = [];

    function logger(aktivitas) {
        const waktu = new Date();

        riwayat.push({
        nama: aktivitas,
        waktu: waktu.toLocaleString("id-ID")
        });
        console.log("Aktivitas tersimpan:", aktivitas);
        console.log ("");
    }
    function tampilkanRiwayat() {

        console.log("RIWAYAT AKTIVITAS");
        console.log("");

        for (let data of riwayat) {
            console.log(
                data.nama,
                "-",
                data.waktu
            );
        }
    }
    return {
        logger,
        tampilkanRiwayat
    };
}

const log = buatLogger();

log.logger("Login");
log.logger("Checkout");
log.logger("Logout");

log.tampilkanRiwayat();
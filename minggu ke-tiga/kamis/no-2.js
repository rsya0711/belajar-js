const namaAplikasi = "Sistem Perusahaan";

function perusahaan() {
    const namaPerusahaan = "PT Maju Bersama";

    function divisi() {
        const namaDivisi = "cepuluhKode";

        function tim() {
            const namaTim = "timHore";

            console.log("AKSES DARI DALAM TIM");
            console.log("Aplikasi :", namaAplikasi);
            console.log("Perusahaan :", namaPerusahaan);
            console.log("Divisi :", namaDivisi);
            console.log("Tim :", namaTim);
            console.log("");
        }


        console.log("AKSES DARI FUNCTION DIVISI");

        console.log("Aplikasi :", namaAplikasi);
        console.log("Perusahaan :", namaPerusahaan);
        console.log("Divisi :", namaDivisi);
        console.log("")
        tim();
    }

    console.log("AKSES DARI FUNCTION PERUSAHAAN");

    console.log("Aplikasi :", namaAplikasi);
    console.log("Perusahaan :", namaPerusahaan);
    console.log("");
    
    divisi();
}

perusahaan();


console.log(" COBA AKSES DARI LUAR ");

console.log(namaAplikasi);

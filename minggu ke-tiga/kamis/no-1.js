const perusahaan = "PT Maju Bersama"; //global scope

function dataPerusahaan() { // function luar (local scope)

    const namaDivisi = "cepuluh";

    function dataTim() { // function dalam (local scope)

        const namaTim = "maju";

        console.log("Perusahaan :", perusahaan);
        console.log("Divisi     :", namaDivisi);
        console.log("Tim        :", namaTim);
    }

    console.log("Perusahaan :", perusahaan);
    console.log("Divisi     :", namaDivisi);
    console.log ("");

    dataTim();
}
console.log("Perusahaan :", perusahaan);
console.log("");
// bisa di akses karena var merupakan global scope, dan dijalankan nya juga di luar function 

dataPerusahaan();
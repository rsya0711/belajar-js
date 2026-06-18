function hitungUmur(tanggalLahir) {

    const lahir = new Date(tanggalLahir);
    const sekarang = new Date();
    const selisih = sekarang - lahir;
    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const bulan = Math.floor(hari / 30);
    const tahun = Math.floor(hari / 365);

    console.log("HASIL UMUR");
    console.log("Umur tahun :", tahun, "tahun");
    console.log("Umur bulan :", bulan, "bulan");
    console.log("Umur hari  :", hari, "hari");

}

hitungUmur("2006-05-17");
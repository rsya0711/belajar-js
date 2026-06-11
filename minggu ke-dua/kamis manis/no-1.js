function daftarBelanja() {
    let daftarBelanja = ["Beras", "Telur", "Gula"];

    daftarBelanja.unshift("Minyak");
    daftarBelanja.unshift("Garam");
    daftarBelanja.pop();

    console.log("Daftar Belanja:", daftarBelanja);
    console.log("Jumlah (i) yang tersisa:", daftarBelanja.length);
}
daftarBelanja();

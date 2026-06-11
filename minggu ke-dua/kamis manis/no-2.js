function cariNilai() {
    const angka = [12, 5, 7, 20, 9];

    const ditemukan = angka.includes(20);
    const indeks = angka.findIndex((i) => (i) === 20);

    console.log("Ditemukan:", ditemukan);
    console.log("Indeks:", indeks);
}

cariNilai();
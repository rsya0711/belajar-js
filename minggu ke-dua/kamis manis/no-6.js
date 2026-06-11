function statistikNilai() {
    const nilai = [80, 90, 75, 100, 60];

    let total = 0;
    let tertinggi = nilai[0];
    let terendah = nilai[0];

    for (let i = 0; i < nilai.length; i++) {
        total += nilai[i];

        if (nilai[i] > tertinggi) {
            tertinggi = nilai[i];
        }

        if (nilai[i] < terendah) {
            terendah = nilai[i];
        }
    }

    let rataRata = total / nilai.length;

    console.log("Total Nilai:", total);
    console.log("Rata rata:", rataRata);
    console.log("Nilai Tertinggi:", tertinggi);
    console.log("Nilai Terendah:", terendah);
}

statistikNilai();
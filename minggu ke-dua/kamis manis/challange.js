function array(data) {

    let total = 0;

    let tertinggi = data[0];
    let terendah = data[0];

    let genap = 0;
    let ganjil = 0;

    for (let i = 0; i < data.length; i++) {

        total += data[i];

        // Nilai tertinggi
        if (data[i] > tertinggi) {
            tertinggi = data[i];
        }

        // Nilai terendah
        if (data[i] < terendah) {
            terendah = data[i];
        }

        // genap ganjil
        if (data[i] % 2 === 0) {
            genap++;
        } else {
            ganjil++;
        }
    }

    let rataRata = total / data.length;

    return {
        jumlahData: data.length,
        total: total,
        rataRata: rataRata,
        nilaiTertinggi: tertinggi,
        nilaiTerendah: terendah,
        jumlahGenap: genap,
        jumlahGanjil: ganjil,
    };
}

console.log(
    array([5, 8, 24, 13, 25])
);

console.log(
    array([2, 3, 35, 9, 40, 55])
);
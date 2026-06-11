function diskonToko() {
    const harga = [10000, 25000, 50000, 120000];
    let hargaDiskon = [];

    for (let i = 0; i < harga.length; i++) {
        hargaDiskon.push(harga[i] - (harga[i] * 10 / 100));
    }

    console.log("Harga Sebelum Diskon:", harga);
    console.log("Harga Setelah Diskon:", hargaDiskon);
}

diskonToko();
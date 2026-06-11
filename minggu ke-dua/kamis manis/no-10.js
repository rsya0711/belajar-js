function kasir() {

    const barang = [
        { nama: "Pensil", harga: 3000, jumlah: 2 },
        { nama: "Buku", harga: 5000, jumlah: 3 },
        { nama: "Penghapus", harga: 2000, jumlah: 1 }
    ];

    let subtotalBarang = [];
    let total = 0;

    let barangTermahal = "";
    let subtotalTermahal = 0;

    for (let i = 0; i < barang.length; i++) {

        let subtotal =
            barang[i].harga * barang[i].jumlah;

        subtotalBarang.push(subtotal);

        total += subtotal;

        if (subtotal > subtotalTermahal) {
            subtotalTermahal = subtotal;
            barangTermahal = barang[i].nama;
        }
    }

    console.log("=== STRUK BELANJA ===");

    for (let i = 0; i < barang.length; i++) {

        console.log(
            barang[i].nama +
            "  Harga: " +
            barang[i].harga +
            "  Jumlah: " +
            barang[i].jumlah +
            "  Subtotal: " +
            subtotalBarang[i]
        );
    }

    console.log();
    console.log(" Total Belanja: ", total);
    console.log(" Barang Termahal: ",barangTermahal,"-",subtotalTermahal);
}

kasir();
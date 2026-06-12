const barang = {
    namaBarang: "Laptop",
    stok: 10,
    harga: 5000000,

    tambahStok(jumlah) {
        this.stok += jumlah;

        console.log("Stok berhasil ditambah");
        console.log("Stok sekarang:", this.stok);
    },

    kurangiStok(jumlah) {
        this.stok -= jumlah;

        console.log("Stok berhasil dikurangi");
        console.log("Stok sekarang:", this.stok);
    },

    totalNilaiBarang() {
        console.log(
            "Total nilai barang " +
            (this.stok * this.harga)
        );
    }
};
console.log("Nama Barang:", barang.namaBarang);
console.log("Stok:", barang.stok);
console.log("Harga:", barang.harga);

barang.tambahStok(3);
barang.kurangiStok(2);
barang.totalNilaiBarang();
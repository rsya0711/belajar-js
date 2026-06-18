const produk = [
    {
        nama: "gandum",
        kadaluarsa: "2028-05-01"
    },
    {
        nama: "susu",
        kadaluarsa: "2026-06-10"
    },
    {
        nama: "kopi",
        kadaluarsa: "2027-01-25"
    }
];

const sekarang = new Date();

for (let item of produk) {
    const tanggalKadaluarsa = new Date(item.kadaluarsa);
    const selisih = tanggalKadaluarsa - sekarang;

    const hari = Math.floor(
        selisih / (1000 * 60 * 60 * 24)
    );

    console.log("Nama Produk", item.nama);

    if (selisih < 0) {
        console.log("Sudah kadaluarsa");

    } else {
        console.log("Belum kadaluarsa");
        console.log("Sisa waktu ", hari + " hari lagi");
    }
    console.log("");
}
const sekarang = new Date();


const hari = sekarang.toLocaleDateString("id-ID", {
    weekday: "long"
});

const tanggal = sekarang.getDate();
const bulan = sekarang.getMonth() + 1;
const tahun = sekarang.getFullYear();


const jam = sekarang.getHours();
const menit = sekarang.getMinutes();
const detik = sekarang.getSeconds();

console.log("WAKTU SEKARANG");

console.log(
    hari + ", " + tanggal + "-" + bulan + "-" + tahun
);

console.log(
    "Pukul " + jam + ":" + menit + ":" + detik
);
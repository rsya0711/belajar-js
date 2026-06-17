const harga = 125499.789;

const atas = parseInt(harga) + 1;

const bawah = parseInt(harga);

const terdekat = Number(harga.toFixed(0));

const duaKoma = harga.toFixed(2);

const rupiah = "Rp " + harga.toFixed(2);

console.log("Ke atas", atas);
console.log("Ke bawah", bawah);
console.log("Terdekat", terdekat);
console.log(duaKoma);
console.log(rupiah);
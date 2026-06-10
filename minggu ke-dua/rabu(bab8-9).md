//...1. Apa itu Array?...//

Array adalah tempat menyimpan banyak data dalam satu variabel.

let siswa = ["Budi", "Asep", "Joko"];

//...2. Indeks Array...//

Indeks selalu dimulai dari 0.

Data	Indeks
Budi	0
Asep	1
Joko	2

Mengakses data:

console.log(siswa[0]); // Budi
console.log(siswa[2]); // Joko

Mengubah data:

siswa[1] = "Andi";

//...3. .length...//

Mengetahui jumlah elemen dalam array.

console.log(siswa.length); // 3

Elemen terakhir:

console.log(siswa[siswa.length - 1]);

//...4. Menambah Data...//

push()

Tambah di akhir.

siswa.push("Dewi");

unshift()

Tambah di awal.

siswa.unshift("Rina");

//...5. Menghapus Data...//

pop()

Hapus elemen terakhir.

siswa.pop();

shift()

Hapus elemen pertama.

siswa.shift();

//...6. Mencari Data...//

indexOf()

Mencari posisi data.

siswa.indexOf("Budi");

Output:

0

Jika tidak ada:

-1
includes()

Mengecek apakah data ada.

siswa.includes("Budi");

Output:

true

//...7. Mengedit Array...//

splice()

Bisa menghapus, menambah, atau mengganti data.

siswa.splice(1, 1); // hapus 1 data dari indeks 1

slice()

Mengambil sebagian array tanpa mengubah array asli.

siswa.slice(1, 3);

//...Method	Fungsi...//

.length	Jumlah elemen
.push()	Tambah di akhir
.unshift()	Tambah di awal
.pop()	Hapus di akhir
.shift()	Hapus di awal
.indexOf()	Cari indeks
.includes()	Cek keberadaan data
.splice(i, n)	Hapus/tambah/ganti data
.slice(i, j)	Ambil sebagian data

//...Rumus Ingat Cepat...///

Push = masuk belakang
Pop = keluar belakang
Unshift = masuk depan
Shift = keluar depan
IndexOf = cari posisi
Includes = cek ada/tidak
Splice = edit array
Slice = copy sebagian


//........BAB 9........//

//...1. Apa itu Function?...//

Function adalah sekumpulan kode yang bisa dipanggil berkali-kali tanpa menulis ulang kode.

function salam() {
  console.log("Halo!");
}

salam();

//...2. Parameter & Argumen...//

Parameter = variabel penerima data pada fungsi.

Argumen = nilai yang dikirim saat fungsi dipanggil.

function sapa(nama) { // parameter
  console.log("Halo", nama);
}

sapa("Budi"); // argumen

Output:

Halo Budi
Default Parameter
function diskon(harga, persen = 10) {
  return harga - (harga * persen / 100);
}

Jika persen tidak diisi → otomatis 10.

//...3. Return...//

return digunakan untuk mengembalikan nilai dari fungsi.

function tambah(a, b) {
  return a + b;
}

let hasil = tambah(3, 4);
console.log(hasil);

Output:

7

Ingat:
console.log() → hanya menampilkan.
return → mengembalikan nilai untuk digunakan lagi.

//...4. Function Declaration...//

Cara paling umum membuat fungsi.

function kali(a, b) {
  return a * b;
}

Bisa dipanggil sebelum ditulis karena hoisting.

//...5. Function Expression...//

Fungsi disimpan dalam variabel.

const kali = function(a, b) {
  return a * b;
};

Tidak bisa dipanggil sebelum didefinisikan.

//...6. Arrow Function (ES6)...//

Versi modern dan lebih singkat.

const kali = (a, b) => a * b;
Contoh lain:

Tanpa parameter:

const salam = () => "Halo";

Satu parameter:

const kuadrat = n => n * n;

Dua parameter:

const tambah = (a, b) => a + b;
Perbedaan Singkat
Jenis	Sintaks
Function Declaration	function nama() {}
Function Expression	const nama = function() {}
Arrow Function	const nama = () => {}


// Function biasa
function nama() {}

// Parameter
function sapa(nama) {}

// Return
function tambah(a, b) {
  return a + b;
}

// Function Expression
const tambah = function(a, b) {
  return a + b;
};

// Arrow Function
const tambah = (a, b) => a + b;

//...Rumus Ingat Cepat...//

Function = mesin yang menjalankan tugas.
Parameter = tempat menerima data.
Argumen = data yang dikirim.
Return = hasil yang dikembalikan.
Function Declaration = fungsi biasa.
Function Expression = fungsi dalam variabel.
Arrow Function = fungsi modern dan ringkas.

Inti yang Harus Dipahami

const luasPersegi = (sisi) => sisi * sisi;
   console.log(luasPersegi(8));

maka jawabannya adalah 64
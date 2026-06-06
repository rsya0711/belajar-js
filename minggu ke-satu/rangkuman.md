Berikut rangkuman yang siap langsung disimpan sebagai file **`rangkuman-javascript.md`** di VS Code:

````md
# Rangkuman JavaScript Dasar

## Bab 1: Pengenalan JavaScript

JavaScript adalah bahasa pemrograman yang digunakan untuk membuat website menjadi interaktif dan dinamis.

### Fungsi JavaScript
- Menampilkan notifikasi (alert).
- Mengubah isi halaman web.
- Membuat animasi.
- Memvalidasi form.
- Berinteraksi dengan API dan server.
- Menangani event seperti klik tombol.

### Contoh Program Sederhana

```javascript
alert("Hello World!");
```

### Cara Menambahkan JavaScript ke HTML

#### Internal JavaScript

```html
<script>
  console.log("Halo Dunia");
</script>
```

#### External JavaScript

```html
<script src="script.js"></script>
```

---

## Bab 2: Sintaks, Statements, dan Comments

### Sintaks JavaScript

Sintaks adalah aturan penulisan kode dalam JavaScript.

Contoh:

```javascript
document.write("Halo Dunia");
```

### Statements

Statement adalah perintah yang akan dijalankan oleh JavaScript.

Contoh:

```javascript
let nama = "Rasya";
console.log(nama);
```

### Comments

Komentar digunakan untuk memberikan catatan pada kode dan tidak akan dieksekusi oleh program.

#### Single Line Comment

```javascript
// Ini komentar satu baris
let umur = 19;
```

#### Multi Line Comment

```javascript
/*
Ini komentar
lebih dari satu baris
*/
let kelas = "XI a";
```

---

## Bab 3: Variable di JavaScript

Variabel digunakan untuk menyimpan data.

### Deklarasi Variabel

#### var

```javascript
var nama = "Rasya";
```

#### let

```javascript
let umur = 19;
```

#### const

```javascript
const sekolah = "SMK";
```

### Perbedaan let dan const

| let | const |
|------|------|
| Nilai dapat diubah | Nilai tidak dapat diubah |
| Digunakan untuk data yang berubah | Digunakan untuk data tetap |

Contoh:

```javascript
let nama = "Rasya";
nama = "Novian";

const negara = "Indonesia";
// negara = "Jepang"; // Error
```

### Aturan Penamaan Variabel

Gunakan camelCase:

```javascript
let namaLengkap;
let nomorTelepon;
let tanggalLahir;
```

Hindari:

```javascript
let 1nama;
let nama lengkap;
```

---

## Bab 4: Tipe-Tipe Data di JavaScript

### 1. String

Menyimpan data berupa teks.

```javascript
let nama = "Rasya";
```

### 2. Number

Menyimpan data berupa angka.

```javascript
let umur = 19;
let nilai = 95.5;
```

### 3. Boolean

Menyimpan nilai benar atau salah.

```javascript
let lulus = true;
let gagal = false;
```

### 4. Undefined

Variabel belum memiliki nilai.

```javascript
let alamat;
console.log(alamat);
```

Output:

```javascript
undefined
```

### 5. Null

Variabel sengaja dikosongkan.

```javascript
let data = null;
```

### 6. Array

Menyimpan banyak data dalam satu variabel.

```javascript
let buah = ["Apel", "Mangga", "Jeruk"];
```

### 7. Object

Menyimpan data dalam bentuk pasangan key dan value.

```javascript
let siswa = {
  nama: "Rasya",
  umur: 19,
};
```

### Mengecek Tipe Data

Gunakan operator `typeof`.

```javascript
let nama = "Rasya";

console.log(typeof nama);
```

Output:

```javascript
string
```

### Ringkasan Tipe Data

| Tipe Data | Contoh |
|------------|---------|
| String | `"Halo"` |
| Number | `100` |
| Boolean | `true` |
| Undefined | `undefined` |
| Null | `null` |
| Array | `["A", "B"]` |
| Object | `{ nama: "Rasya" }` |

---

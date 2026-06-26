1. Fetch API

Untuk komunikasi dengan server (ambil/kirim data) menggunakan Promise.

GET → mengambil data
POST → mengirim data
PUT/PATCH → update data
DELETE → hapus data

Pakai:

fetch(url)
.then()
.catch()

atau:

async/await + try catch

2. Web Storage API

Menyimpan data di browser.

localStorage

Data permanen
Sampai dihapus manual

sessionStorage

Data hanya selama tab terbuka

Method:

setItem()    // simpan
getItem()    // ambil
removeItem() // hapus
clear()      // hapus semua

Object harus:

JSON.stringify()

saat simpan dan:

JSON.parse()

saat ambil.

3. Geolocation API

Mengambil lokasi pengguna.

Menggunakan:

navigator.geolocation

Bisa:

Ambil lokasi sekali → getCurrentPosition()
Pantau lokasi → watchPosition()

Butuh izin user.

4. History API

Mengatur navigasi browser tanpa reload.

Method:

pushState()    // tambah halaman
replaceState() // ganti halaman
back()         // kembali
forward()      // maju

Dipakai untuk membuat SPA (Single Page Application).

5. Clipboard API

Mengakses copy-paste.

Salin:

navigator.clipboard.writeText()

Baca:

navigator.clipboard.readText()

6. Intersection Observer API

Mendeteksi elemen terlihat di layar.

Biasanya untuk:

animasi saat scroll
lazy loading gambar

Menggunakan:

IntersectionObserver()

Intinya:
Web API membuat JavaScript bisa berinteraksi dengan browser, server, penyimpanan, lokasi, navigasi, clipboard, dan tampilan halaman.
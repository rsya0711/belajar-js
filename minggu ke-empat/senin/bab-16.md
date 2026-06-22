JS DOM (Manipulasi DOM)

DOM (Document Object Model) adalah cara JavaScript mengakses dan mengubah HTML di browser. HTML dianggap sebagai pohon objek, dan JavaScript bisa memanipulasi elemennya.

1. Memilih Elemen HTML

getElementById()

Mengambil elemen berdasarkan id
document.getElementById("judul")

querySelector()

Mengambil 1 elemen pertama berdasarkan CSS selector
document.querySelector(".btn")
document.querySelector("#menu")

querySelectorAll()

Mengambil semua elemen yang cocok
document.querySelectorAll("p")
2. Mengubah Isi HTML

textContent

Mengubah teks saja
judul.textContent = "Halo"

innerHTML

Mengubah isi + bisa membaca tag HTML
judul.innerHTML = "<b>Halo</b>"
3. Mengubah Atribut

Mengambil atribut:

gambar.getAttribute("src")

Mengubah atribut:

gambar.setAttribute("src","baru.jpg")
4. Mengubah Style

Langsung ubah CSS:

kotak.style.color = "red"
kotak.style.backgroundColor = "black"
5. Mengatur Class CSS

Tambah class:

element.classList.add("aktif")

Hapus class:

element.classList.remove("aktif")

Toggle (nyala/mati):

element.classList.toggle("gelap")

Cek class:

element.classList.contains("aktif")
6. Membuat Elemen Baru

Buat elemen:

const p = document.createElement("p")

Isi:

p.textContent = "Halo"

Masukkan ke HTML:

body.appendChild(p)

DOM = jembatan JS => HTML

Alurnya biasanya:

Cari elemen
  querySelector()


Ubah/manipulasi
  textContent
  style
  classList

Tambah/hapus elemen
  createElement()
  appendChild()
  remove()
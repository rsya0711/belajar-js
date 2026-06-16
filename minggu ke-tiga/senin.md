syntaks adalah kode di js 

variabel
let = bisa di ganti 
const = nilai tetap 
    pemanggilan variabel harus sama, supaya tidak terjadi error

camelCase (kata kedua huruf pertama harus kapital )
PascalCase (kata pertama dan kata selanjutnya huruf pertamanya harus kapital)
snake_case (terdapat tanda _)

statement 
(menjalankan sebuah tindakan )

ekspresi 
(menghasilkan sebuah nilai (number))


comment
gunakan (ctrl + /) atau (//) untuk kita umpetin supaya komputer tidak bisa membacanya

string (terdapat tanda kutip )
number (hanya nomor )
boolean (hanya true dan false )
undefined (nilai kosong)
null (nilai kosong tetapi di sengaja)
array (menyimpan banyak data)


+	Penjumlahan	
-	Pengurangan
*	Perkalian
/	Pembagian
%	Modulus (sisa bagi)
**	Perpangkatan 

=	Penugasan dasar	
+=	Tambah dan simpan	
-=	Kurang dan simpan	
*=	Kali dan simpan	
/=	Bagi dan simpan	

>	Lebih besar dari
<	Lebih kecil dari
>=	Lebih besar atau sama dengan
<=	Lebih kecil atau sama dengan	
==	Sama nilai (longgar)
===	Sama nilai dan tipe data (ketat)
!=	Tidak sama nilai tetapi jika number nya sama, walaupun tipe data nya beda, maka dia true 	
!==	Tidak sama nilai dan tipe datanya


&&	AND	semua kondisi harus true
||	OR	salah satu kondisi setidaknya harus true supaya bisa menghasilkan nilai true
!	NOT membalikan nilai (jika  false maka true dan jika true maka false)

if menjalankan sebuah kode yang bernilai true
else jika if tidak ada, maka output akan menghasilkan else
else if menambahkan kondisi lain 

switch	Membandingkan satu variabel dengan banyak nilai tetap
break	Menghentikan eksekusi paksa
continue hanya ngeskip satu kondisi

looping adalah perulangan dari kode yang kita jalankan 
for kita sudah tahu jumlah hasilnya
while belum kita ketahui 
do while jalankan dulu kode nya, baru di cek apakah true atau false 

array adalah untuk menyimpan suatu nilai dalam satu variabel
.length	Mengembalikan jumlah elemen	Tidak (properti)
.push(nilai)	Menambahkan elemen di akhir	
.unshift(nilai)	Menambahkan elemen di awal	
.pop()	Menghapus dan mengembalikan elemen terakhir	
.shift()	Menghapus dan mengembalikan elemen pertama
.indexOf(nilai)	Mencari indeks elemen pertama yang cocok	
.includes(nilai)	Memeriksa apakah elemen ada dalam array	
.splice(i, n)	Menghapus, menyisipkan, atau mengganti elemen	
.slice(i, j)	Mengembalikan salinan sebagian array

function untuk membuat variabel kita yang sama tidak bertabrakan, atau bisa di gunakan kembali
mengembalikan nilai itu menggunakan return
arrow function => (lebih ringkas)

object digunakan untuk menyimpan informasi 
dot notation (obj.properti) 
bracket notation obj["properti"]

jika ingin menghapus properti gunakan (delete)
jika ingin memeriksa properti gunakan (in)

fungsi yang berada di dalam object disebut method
this. untuk memanggil properti 
Untuk mengakses seluruh properti dalam sebuah object secara berurutan, gunakan perulangan (for...in)

iterable untuk mengakses data satu persatu 

Tipe Data	Contoh	Cara Iterasi
String	"Jakarta"	Karakter demi karakter: J, a, k, ...
Array	["Budi", "Ani"]	Elemen demi elemen: "Budi", "Ani"
Map	new Map()	Pasangan key-value satu per satu
Set	new Set()	Nilai unik satu per satu

iterable gunakan for...of
untuk iterable menggunakan for...in hanya bisa untuk object dan properti nya

non iterable tidak bisa mengakses data satu persatu 

Tipe Data	Alasan Tidak Dapat Diiterasi
Number	Angka seperti 4500 adalah satu nilai tunggal, bukan kumpulan
Boolean	true atau false adalah status, bukan kumpulan elemen
Object {}	Meskipun memiliki banyak properti, Object tidak memiliki urutan indeks bawaan
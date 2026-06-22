Event adalah kejadian yang terjadi di halaman web yang bisa ditangkap JavaScript, seperti:

klik tombol
mengetik
submit form
mouse bergerak

Cara menggunakan event:

element.addEventListener("event", function(){
    // kode dijalankan
});

Contoh:

button.addEventListener("click", function(){
    console.log("Tombol diklik");
});

Event yang sering dipakai:

click → saat klik
input → saat mengetik
submit → kirim form
mouseover → mouse masuk
keydown → tekan keyboard

Intinya:
Event = cara JavaScript merespon tindakan user di halaman web.
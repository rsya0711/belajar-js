// 1. mesin tiket parkir

let lamaParkir = 6;
let biaya = 0;

if (lamaParkir <= 2) {
    biaya = lamaParkir * 3000   
}
else {
    biaya = (2 * 3000) + ((lamaParkir - 2) * 2000);
}
console.log ("total biaya parkir adalah " + biaya);

{
let lamaParkir = 7;
let biaya = 0;

if (lamaParkir <= 2) {
    biaya = lamaParkir * 3000   
}
else {
    biaya = (2 * 3000) + ((lamaParkir - 2) * 2000);
}
console.log ("total biaya parkir adalah " + biaya);
}

{
let lamaParkir = 9;
let biaya = 0;

if (lamaParkir <= 2) {
    biaya = lamaParkir * 3000   
}
else {
    biaya = (2 * 3000) + ((lamaParkir - 2) * 2000);
}
console.log ("total biaya parkir adalah " + biaya);
console.log()
}

// 2. tebak pola 
for (let i = 1; i <= 5; i++) {
    let hasil = "";

    for (let j = 1 ; j <= i; j++) {
        hasil += j;
    }

    console.log(hasil);
    console.log()
}


// 3. ATM
let saldo = 100000;
    console.log ("saldo awal adalah : " + saldo )

let transaksi = [
    { tipe: "tarik", jumlah: 20000 },
    { tipe: "setor", jumlah: 50000 },
    { tipe: "tarik", jumlah: 30000 },
    { tipe: "tarik", jumlah: 150000 }
];

for (let i = 0; i < transaksi.length; i++) {

    if (transaksi[i].tipe === "tarik") {

        if (saldo >= transaksi[i].jumlah) {
            saldo -= transaksi[i].jumlah;
            console.log("Tarik " + transaksi[i].jumlah);
        } else {
            console.log("Tarik " + transaksi[i].jumlah + " gagal, saldo tidak mencukupi");
        }

    } else if (transaksi[i].tipe === "setor") {

        saldo += transaksi[i].jumlah;
        console.log("Setor " + transaksi[i].jumlah);

    }

    console.log("Saldo saat ini: " + saldo);
    console.log ()
}

// 4.  FizzBuzz Modifikasi

for (let i = 1; i <= 50; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log ("fizzBuzz")}

    if (i % 3 === 0){
        console.log ("Fizz")}

    if (i % 5 === 0){
        console.log ("Buzz")}
    
        else {
    
        console.log (i);}
        console.log ()
    
}

// 5. Password Validator

let username = "rasya 0711";

let adaAngka = false;
let adaSpasi = false;

for (let i = 0; i < username.length; i++) {
    console.log ( username [i]);

    if (username[i] >= "0" && username[i] <= "9") {
        adaAngka = true;
        }
    
    if (username[i] === " ") {
        adaSpasi = true;
    }
}

if (
    username.length >= 8 &&
    adaAngka && adaSpasi) {
    
    console.log("Ada angka:", adaAngka);
    console.log("Ada spasi:", adaSpasi);
    console.log("Username valid");
} else {
    console.log ("Username tidak valid");
    console.log ()
}

// 6. tebak angka tanpa input 

let angkaRahasia = 27;
let percobaan = 0;

for (let i = 1; i <= 50; i++){
    percobaan++; 
        if (i === angkaRahasia) {
        console.log(`Angka yang ditemukan: ${angkaRahasia}`);
        console.log(`Jumlah percobaan: ${percobaan}`);
        break;}}
        console.log ()

// 7. diskon

let daftarBelanja = [80000, 120000, 275000, 600000];

for (let i = 0; i < daftarBelanja.length; i++) {
    let belanja = daftarBelanja [i];
    let diskon = 0;

    if (belanja >= 500000) {
        diskon = belanja * 0.20;
    }
    else if (belanja >= 250000) {
        diskon = belanja * 0.10;
    }
    else if (belanja >= 100000) {
        diskon = belanja * 0.5;
    }

    else {
    console.log ("tidak mendapatkan diskon");
    }

    let bayar = (belanja - diskon);

    console.log(`Belanja: Rp${belanja}`);
    console.log(`Diskon : Rp${diskon}`);
    console.log(`Bayar  : Rp${bayar}`);
    console.log ( );
}

// 9. puzzle pola 
for (let i = 3; i >= 1; i--) {
    let baris = "";

    for (let j = 1; j <= i; j++) {
        baris += "*";
    }

    console.log(baris);
}

for (let i = 2; i >= 1; i--) {
    let baris = "";

    for (let j = 1; j <= i; j++) {
        baris += "*";
    }
    console.log(baris);
    console.log ()
}

// 10. tantangan logika 

let jumlah = 0;

for (let i = 1; i <= 100; i++)  {
    if ((i % 2 === 0 && i % 4 !== 0) || i % 7 === 0) {
        console.log (i  + " bilangan spesial ");
        jumlah++; }
    else {
        console.log (i);
    }}

console.log("Jumlah bilangan spesial:", jumlah);

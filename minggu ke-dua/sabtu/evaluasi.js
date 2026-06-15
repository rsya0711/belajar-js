const kerajaan = [
    {
        nama : "ari",
        energi : 90,
        makanan : 2,
        emas : 30,
        status : "aktif"
    },


    {
        nama : "bima",
        energi : 60,
        makanan : 1,
        emas : 10,
        status : "aktif"
    },

    {
        nama : "citra", 
        energi : 50,
        makanan : 0,
        emas : 50,
        status : "aktif"
    },

    {
        nama : "dewi",
        energi : 20,
        makanan : 4,
        emas : 5,
        status : "aktif"
    },

    {
        nama : "eko",
        energi : 75,
        makanan : 0,
        emas : 20,
        status : "aktif"
    }
];

function Data(data){
    for (let penduduk of data) {
        console.log(
            penduduk.nama,
            penduduk.energi,
            penduduk.makanan,
            penduduk.emas,
            penduduk.status
        );
    }
}

Data(kerajaan);


// fase 1
function makanMakanan(data){

    for(let penduduk of data){
        if (penduduk.status !== "aktif") {
            continue;
        }

        if(penduduk.makanan > 0){

            penduduk.makanan -= 1;
            penduduk.energi += 10;

            console.log(
                penduduk.nama + " makan"
            );

        }else{
            penduduk.energi -= 20;
            console.log(
                penduduk.nama + " tidak punya makanan"
            );
        }
    }
    return data;
}

console.log(makanMakanan(kerajaan));

// fase 2
function cekTumbang(data) {
    for (let penduduk of data) {
        if (penduduk.energi < 0) {
            penduduk.status = "tumbang";
            console.log(penduduk.nama + " tumbang");
        }
    }
}

cekTumbang(kerajaan);

// fase 3

function cariMakan(data) {
    for (let penduduk of data) {
        if (penduduk.status !== "aktif") {
            continue;
        }

        if (penduduk.energi >= 80) {
            penduduk.makanan += 5;

        } else if (penduduk.energi >= 50) {
            penduduk.makanan += 2;

        } else if (penduduk.energi >= 30) {
            penduduk.makanan += 1;

        } else {
            console.log(penduduk.nama + " tidak mendapatkan makanan");
        }

        penduduk.energi -= 15;
    }

    return data;
}

console.log(cariMakan(kerajaan));

// fase 4

function beliMakanan(data) {
    for (let penduduk of data) {
        if (penduduk.status !== "aktif") {
            continue;
        }

        if (penduduk.makanan <= 0) {
            if (penduduk.emas >= 10) {
                penduduk.makanan += 1;
                penduduk.emas -= 10;
                console.log(penduduk.nama + " membeli makanan");
            } else {
                console.log(penduduk.nama + " emas tidak cukup");
            }
        }
    }
    return data;
}

console.log(beliMakanan(kerajaan));

// fase 5

function bantuPenduduk(data){

    let pemberi = null;
    let penerima = null;

    for(let penduduk of data){
        if(
            penduduk.status === "aktif" &&
            penduduk.makanan > 4
        ){
            pemberi = penduduk;
        }
    }

    for(let penduduk of data){
        if (penduduk.status !== "aktif") {
            continue;
        }

        if(penerima === null){
            penerima = penduduk;
        }else if(
            penduduk.makanan < penerima.makanan
        ){
            penerima = penduduk;
        }else if(
            penduduk.makanan === penerima.makanan &&
            penduduk.energi < penerima.energi
        ){
            penerima = penduduk;
        }
    }

    if(pemberi !== null && penerima !== null){

        pemberi.makanan -= 2;
        penerima.makanan += 2;
        console.log(
            pemberi.nama +
            " membantu " +
            penerima.nama
        );
    }
    return data;
}
console.log(bantuPenduduk(kerajaan));

// no 1
function satuHari() {
    cariMakan(kerajaan);
    beliMakanan(kerajaan);
    bantuPenduduk(kerajaan);
    makanMakanan(kerajaan);
    cekTumbang(kerajaan);

    for (let penduduk of kerajaan) {
        console.log(penduduk.nama, "Energi:", penduduk.energi, "Makanan:", penduduk.makanan, "Emas:", penduduk.emas, "Status:", penduduk.status);
    }
}

// no 2
for (let hari = 1; hari <= 7; hari++) {
    console.log("hari ke-" + hari);
    satuHari();
    console.log("");
}

// no 3

function hasil (data){
    let aktif = 0;
    let emas = 0;
    let makanan = 0;
    let energi = 0;
    
    console.log();
    function Akhir(data){

    let totalMakanan = 0;
    let totalEmas = 0;

    let energi = 0;
    let jumlahEnergi = 0;


    console.log();

    for(let penduduk of data){

        if(penduduk.status === "aktif"){

            console.log(
                penduduk.nama,
                "masih aktif"
            );

            energi += penduduk.energi;
            jumlahEnergi++;

        }else{
            console.log(
                penduduk.nama,
                "tumbang"
            );
        }
        totalMakanan += penduduk.makanan;
        totalEmas += penduduk.emas;
    }

    console.log(
        "Total makanan:",
        totalMakanan
    );

    console.log(
        "Total emas:",
        totalEmas
    );

    console.log(
        "Rata-rata energi aktif:",
        energi / jumlahEnergi
    );
    }
    Akhir(data);
}
hasil(kerajaan);

// no 4
function pendudukAktif(data) {
    let hasil = [];
    for (let penduduk of data) {
        if (penduduk.status === "aktif") {
            hasil.push(penduduk.nama);
        }
    }
    return hasil;
}

function pendudukTumbang(data) {
    let hasil = [];
    for (let penduduk of data) {
        if (penduduk.status === "tumbang") {
            hasil.push(penduduk.nama);
        }
    }
    return hasil;
}

function pendudukKaya(data) {
    let kaya = data[0];
    for (let penduduk of data) {
    if (
penduduk.emas + penduduk.energi >
kaya.emas + kaya.energi
){
    kaya = penduduk;

}
    }
    return kaya;
}

function laporan(data) {
    console.log("Penduduk aktif: ", pendudukAktif(data));
    console.log("Penduduk tumbang: ", pendudukTumbang(data));
    console.log("Penduduk terkaya: ", pendudukKaya(data));
}
laporan(kerajaan);

// no 5

let jumlahEnergi = 0;
let totalMakanan = 0;
let totalEmas = 0;
let daftarPendudukAktif = [];

for (let i = 0; i < kerajaan.length; i++) {
    jumlahEnergi += kerajaan[i].energi;
    totalMakanan += kerajaan[i].makanan;
    totalEmas += kerajaan[i].emas;
    if (kerajaan[i].status === "aktif") {
        daftarPendudukAktif.push(kerajaan[i].nama);
    }
}
console.log("Total energi:", jumlahEnergi);
console.log("Total makanan:", totalMakanan);
console.log("Total emas:", totalEmas);
console.log(
    "Penduduk aktif:",
    daftarPendudukAktif
);
console.log(
    "Jumlah penduduk aktif:",
    daftarPendudukAktif.length
);

// no 6

for(let penduduk of kerajaan){
    console.log(penduduk.nama);
    //  karena bertipe array (iterable)
};
for (let penduduk of kerajaan){
    for (let huruf of penduduk.nama){
    console.log (huruf);
    // karena bertipe string (iterable)
}}

// for(let angka of penduduk.energi){
//     console.log(angka);
// } non iterable, karena bertipe number


// no 7 

// urutan pilihan saya (komsumsi - solidaritas - mencari - pasar )
//  karena untuk menjaga kesimbangan energi, supaya tidak ada yang tumbang duluan dengan selisih jauh.

// n0 8

let penduduk = 

{
        nama : "ari",
        energi : 90,
        makanan : 2,
        emas : 30,
        status : "aktif",
    };


    {
        nama : "bima";
        energi : 60;
        makanan : 1;
        emas : 10;
        status : "aktif";
    }

    {
        nama : "citra"; 
        energi : 50;
        makanan : 0;
        emas : 50;
        status : "aktif";
    }

    {
        nama : "dewi";
        energi : 20;
        makanan : 4;
        emas : 5;
        status : "aktif";
    }

    {
        nama : "eko";
        energi : 75;
        makanan : 0;
        emas : 20;
        status : "aktif";
    }
console.log (kerajaan.slice (kerajaan));

const total = [];

for (let i = 0; i < kerajaan.length; i++) {
    let nilai =
        kerajaan[i].energi +
        (kerajaan[i].makanan * 10) +
        kerajaan[i].emas;

    total.push(nilai);
}

let terbesar = total[0];
let nilaiPemenang = 0;

for (let i = 1; i < total.length; i++) {
    if (total[i] > terbesar) {
        terbesar = total[i];
        nilaiPemenang = i;
    }
}

console.log("Pemenang:", kerajaan[nilaiPemenang].nama, "nilai:", terbesar);


let pemenang = kerajaan[nilaiPemenang];


console.log("Penduduk paling berpeluang bertahan:");
console.log(pemenang);

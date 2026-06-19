function buatLaporanSekolah(smkBisa ,...siswa){
const daftarSiswa = [...siswa];

const jumlahSiswa = daftarSiswa.length;

let totalNilai = 0;

for (const {nilai} of daftarSiswa){
    totalNilai = totalNilai + nilai 
} 

const rataRata = totalNilai / jumlahSiswa;

let siswaTertinggi = daftarSiswa[0];
    let siswaTerendah = daftarSiswa[0];


    for (const siswa of daftarSiswa){
        if (siswa.nilai > siswaTertinggi.nilai){
            siswaTertinggi = siswa;
        }
        if (siswa.nilai < siswaTerendah.nilai){
            siswaTerendah = siswa;
        }
    }

    const [siswaPertama] = daftarSiswa;


    console.log("=== Laporan", smkBisa, "===");
    console.log("Jumlah siswa :", jumlahSiswa);
    console.log("Rata-rata nilai :", rataRata);

    console.log(
        "Nilai tertinggi :",
        siswaTertinggi.nama,
        siswaTertinggi.nilai
    );

    console.log(
        "Nilai terendah :",
        siswaTerendah.nama,
        siswaTerendah.nilai
    );


    console.log("Daftar siswa:");

    for (const {nama, kelas} of daftarSiswa){
        console.log(nama, "-", kelas);
    }
}

buatLaporanSekolah(
    "SMK bisa",
    {
        nama:"Ari",
        nilai:90,
        kelas:"IX SIJA"
    },
    {
        nama:"Bima",
        nilai:75,
        kelas:"IX SIJA"
    },
    {
        nama:"Citra",
        nilai:87,
        kelas:"IX SIJA"
    }
);

const peserta = [
{
    nama: "Ari",
    nilai: [90, 80, 85]},
{
    nama: "Bima",
    nilai: [100, 60, 70]},
{
    nama: "Citra",
    nilai: [95, 90, 88]}
];

function buatLeaderboard(data){

    let daftarPeserta = [...data];
    let history = [];

    function simpanRiwayat(aksi){

        history.push({
            aksi: aksi,
            waktu: new Date().toLocaleString("id-ID")
        });
    }
    return {

        tambahPeserta: function(...pesertaBaru){

            for(const peserta of pesertaBaru){
                daftarPeserta = [
                    ...daftarPeserta,
                    peserta
                ];
            }

            simpanRiwayat("Tambah peserta");
        },

        hapusPeserta: function(nama){

            let dataBaru = [];

            for(const peserta of daftarPeserta){
                if(peserta.nama !== nama){
                    dataBaru.push(peserta);
                }
            }

            daftarPeserta = dataBaru;

            simpanRiwayat("Hapus peserta " + nama);
        },

        ubahNilai: function(nama, nilaiBaru){

            for(const peserta of daftarPeserta){
                if(peserta.nama === nama){
                    peserta.nilai = [...nilaiBaru];
                }
            }

            simpanRiwayat("Ubah nilai " + nama);
        },

        ranking: function(){

            let hasil = [];

            for(const {nama, nilai} of daftarPeserta){

                let total = 0;

                for(const angka of nilai){
                    total = total + angka;
                }

                hasil.push({
                    nama: nama,
                    rataRata: total / nilai.length
                });
            }

            for(let i = 0; i < hasil.length; i++){
                for(let j = i + 1; j < hasil.length; j++){

                    if(hasil[i].rataRata < hasil[j].rataRata){
                        let sementara = hasil[i];
                        hasil[i] = hasil[j];
                        hasil[j] = sementara;
                    }
                }
            }
            
            return hasil;
        },

        riwayat: function(){
            return [...history];
        }
    };
}

const leaderboard = buatLeaderboard(peserta);

leaderboard.tambahPeserta({
    nama:"Doni",
    nilai:[80,85,90]
});

leaderboard.ubahNilai(
    "Doni",
    [85,90,95]
);

leaderboard.hapusPeserta("Bima");

console.log(peserta);
console.log(leaderboard.ranking());
console.log(leaderboard.riwayat());

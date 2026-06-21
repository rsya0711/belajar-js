function buatBank(namaBank){

    let daftarRekening = [];
    let nomorRekening = 2150;

    return {

        buatRekening: function(data){
            nomorRekening++;

            const rekening = {
                nomor: nomorRekening,
                nama: data.namaPemilik,
                saldo: data.saldoAwal,
                transaksi: []
            };

            daftarRekening.push(rekening);

            return nomorRekening;
        },

        setor: function(data){
            for(const rekening of daftarRekening){
                if(rekening.nomor === data.nomor){
                    rekening.saldo += data.jumlah;

                    rekening.transaksi.push({

                        jenis: "Setor",
                        jumlah: data.jumlah,
                        waktu: new Date().toLocaleString("id-ID")
                    });
                }
            }
        },

        tarik: function(data){
            for(const rekening of daftarRekening){
                if(rekening.nomor === data.nomor){
                    if(rekening.saldo >= data.jumlah){
                        rekening.saldo -= data.jumlah;

                        rekening.transaksi.push({

                            jenis: "Tarik",
                            jumlah: data.jumlah,
                            waktu: new Date().toLocaleString("id-ID")
                        });
                    }else{
                        console.log("Saldo tidak cukup");
                    }
                }
            }
        },

        transfer: function(data){
            for(const rekening of daftarRekening){
                if(rekening.nomor === data.masuk){
                    rekening.saldo += data.jumlah;

                    rekening.transaksi.push({

                        jenis: "Transfer masuk",
                        jumlah: data.jumlah,
                        waktu: new Date().toLocaleString("id-ID")
                    });
                }

                if(rekening.nomor === data.keluar){
                    rekening.saldo -= data.jumlah;

                    rekening.transaksi.push({

                        jenis: "Transfer keluar",
                        jumlah: data.jumlah,
                        waktu: new Date().toLocaleString("id-ID")
                    });
                }
            }
        },

        laporan: function(){
            console.log("Bank : " + namaBank);

            for(const rekening of daftarRekening){
                console.log("Nomor : " + rekening.nomor);
                console.log("Nama : " + rekening.nama);
                console.log("Saldo : " + rekening.saldo);
                console.log("Transaksi:");

                for(const data of rekening.transaksi){
                    console.log(
                        data.jenis + " " + data.jumlah + " waktu: " + data.waktu
                    );
                }
            }
        }
    };
}

const bank = buatBank("Bank Central Asia");

const jamal = bank.buatRekening({
    namaPemilik: "jamal",
    saldoAwal: 500000

});

const skyo = bank.buatRekening({
    namaPemilik: "skyo",
    saldoAwal: 900000

});

bank.setor({
    nomor: jamal,
    jumlah: 300000

});

bank.tarik({
    nomor: skyo,
    jumlah: 100000

});

bank.transfer({
    masuk: skyo,
    keluar: jamal,
    jumlah: 100000

});

bank.laporan();
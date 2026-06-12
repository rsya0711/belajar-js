const dompet = {
    pemilik: "Rasya",
        saldo: 100000,

    topUp(jumlah){
        this.saldo += jumlah;
        console.log ("saldo bertambah " + this.saldo );
    },

    bayar(jumlah) {
        if (jumlah > this.saldo){
            console.log (" saldo tidak cukup" );
        }
        else {
            (this.saldo -= jumlah);
            console.log ("pembayaran berhasil")
        }
    },

    cekSaldo() {
        console.log("Saldo sekarang  adalah " + this.saldo);
    },
    }

    dompet.cekSaldo();
    dompet.topUp(40000);
    dompet.bayar(20000);
    dompet.cekSaldo();

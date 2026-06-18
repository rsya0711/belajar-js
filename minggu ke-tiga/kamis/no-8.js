function buatDompet(saldoAwal) {

    let saldo = saldoAwal;

    function tambahSaldo(jumlah) {
        saldo = saldo + jumlah;
        console.log("Tambah saldo:", jumlah);
    }

    function kurangiSaldo(jumlah) {
        saldo = saldo - jumlah;
        console.log("Kurangi saldo:", jumlah);
    }

    function cekSaldo() {
        console.log("Saldo sekarang:", saldo);
    }

    return {
        tambahSaldo,
        kurangiSaldo,
        cekSaldo
    };

}

const dompetSaya = buatDompet(100000);


dompetSaya.cekSaldo();
dompetSaya.tambahSaldo(50000);
dompetSaya.cekSaldo();
dompetSaya.kurangiSaldo(30000);
dompetSaya.cekSaldo();
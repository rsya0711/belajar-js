const bank = {
    nasabah: [],

    tambahNasabah(nama, saldo) {
        this.nasabah.push({
            nama: nama,
            saldo: saldo
        });

        console.log(nama + " berhasil ditambahkan");
    },

    cariNasabah(nama) {
        for (const orang of this.nasabah) {
            if (orang.nama === nama) {
                console.log("ditemukan:");
                console.log(orang);
                return orang;
            }
        }

        console.log("nasabah tidak ditemukan");
    },

    transfer(pengirim, penerima, jumlah) {
        let dari = null;
        let ke = null;

        for (const orang of this.nasabah) {
            if (orang.nama === pengirim) {
                dari = orang;
            }

            if (orang.nama === penerima) {
                ke = orang;
            }
        }

        if (dari && ke) {
            if (dari.saldo >= jumlah) {
                dari.saldo -= jumlah;
                ke.saldo += jumlah;

                console.log("transfer berhasil");
            } else {
                console.log("saldo tidak cukup");
            }
        } else {
            console.log("nasabah tidak ditemukan");
        }
    },

    tampilkanNasabah() {
        console.log("data nasabah:");

        for (const orang of this.nasabah) {
            console.log(
                orang.nama +
                " - Saldo: Rp" +
                orang.saldo
            );
        }
    }
};

bank.tambahNasabah("jamal", 2000000);
bank.tambahNasabah("kiko", 500000);

bank.cariNasabah("jamal");

bank.transfer("jamal", "kiko", 500000);

bank.tampilkanNasabah();
const karakter = {
    nama: "Jamal",
    hp: 100,
    attack: 30,

    serang() {
        console.log(this.nama + " menyerang dengan " + this.attack + " damage");
    },

    kenaDamage(jumlah) {
        this.hp -= jumlah;

        if (this.hp < 0) {
            this.hp = 0;
        }

        console.log(this.nama + " menerima " + jumlah + " damage");
    },

    heal(jumlah) {
        this.hp += jumlah;

        console.log(this.nama + " heal " + jumlah + " HP");
    },

    status() {
        console.log("Nama: " + this.nama);
        console.log("HP: " + this.hp);
        console.log("Attack: " + this.attack);
    }
};


karakter.serang();

karakter.kenaDamage(60);

karakter.heal(25);

karakter.status();
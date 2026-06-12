const lampu = {
    status: "mati",

    nyalakan() {
        this.status = "menyala";
        console.log("Lampu dinyalakan");
    },

    matikan() {
        this.status = "mati";
        console.log("Lampu dimatikan");
    },

    toggle() {
        if (this.status === "menyala") {
            this.status = "mati";
        } else {
            this.status = "menyala";
        }

        console.log("Status lampu berubah");
    },

    cekStatus() {
        console.log("Status lampu:", this.status);
    }
};

lampu.cekStatus();

lampu.nyalakan();
lampu.cekStatus();

lampu.toggle();
lampu.cekStatus();

lampu.toggle();
lampu.cekStatus();

lampu.matikan();
lampu.cekStatus();
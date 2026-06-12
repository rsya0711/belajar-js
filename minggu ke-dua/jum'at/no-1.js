const mahasiswa = {
    nama: "Jamal",
    nim: 765843645,
    jurusan: "Hukum keluarga islam",
    semester: 6,

    perkenalan() {
        console.log("halo. nama saya " + this.nama + ", " + "nim saya " + this.nim + "," + " jurusan saya adalan " + this.jurusan + "," + " saya mahasiswa semester " + this.semester);
    }
};

mahasiswa.perkenalan ()
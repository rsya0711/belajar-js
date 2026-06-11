function perpustakaan() {
    let buku = [ "Laskar Pelangi", "Bumi", "Dilan", "Ayat-Ayat Cinta"];

    buku.push("Negeri 5 Menara");

    let index = buku.indexOf("Dilan");

    if (index !== -1) {
        buku.splice(index, 1);
    }

    let tersedia = buku.includes("Bumi");

    console.log("Apakah buku tersedia?", tersedia);
    console.log("Daftar Buku:", buku);
}

perpustakaan();
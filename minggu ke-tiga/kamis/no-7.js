function buatCounter() {

    let jumlahPengunjung = 0;
    function counter() {
        jumlahPengunjung++;
        console.log("Pengunjung ke " + jumlahPengunjung);
    }
    return counter;
}
const pengunjung = buatCounter();

pengunjung();
pengunjung();
pengunjung();
pengunjung();
pengunjung();
pengunjung();

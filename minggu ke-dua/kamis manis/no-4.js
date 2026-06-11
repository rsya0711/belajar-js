function nilaiKelulusan() {
    const nilai = [90, 65, 75, 40, 88, 70, 55];

    let lulus = [];
    let tidakLulus = [];

    for (let i = 0; i < nilai.length; i++) {
        if (nilai[i] >= 75) {
            lulus.push(nilai[i]);
        } else {
            tidakLulus.push(nilai[i]);
        }
    }

    console.log("Siswa lulus:", lulus);
    console.log("Siswa tidak lulus:", tidakLulus);
    console.log("Jumlah lLulus:", lulus.length);
    console.log("Jumlah tidak lulus:", tidakLulus.length);
}

nilaiKelulusan();
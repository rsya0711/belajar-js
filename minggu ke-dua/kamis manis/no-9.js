function rankingNilai() {
    const nilai = [78, 95, 62, 88, 70, 100];

    let urut = nilai.slice();

    for (let i = 0; i < urut.length; i++) {
        for (let j = i + 1; j < urut.length; j++) {

            if (urut[i] < urut[j]) {
                let sementara = urut[i];
                urut[i] = urut[j];
                urut[j] = sementara;
            }
        }
    }

    console.log("Data Asli:", nilai);

    console.log("Urutan tertinggi ke terendah:", urut);

    console.log("3 Nilai tertinggi:",
        urut.slice(0, 3)
    );

    console.log("2 Nilai terendah:",
        urut.slice(urut.length - 2)
    );
}

rankingNilai();
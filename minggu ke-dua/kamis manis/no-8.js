function analisisNama() {
    const nama = ["Budi","Andi","Citra","Dewi","Asep","Aulia"];

    let awalanA = [];
    let lebihDari4 = [];

    for (let i = 0; i < nama.length; i++) {

        if (nama[i][0] === "A") {
            awalanA.push(nama[i]);
        }

        if (nama[i].length > 4) {
            lebihDari4.push(nama[i]);
        }
    }

    console.log("Nama diawali A:", awalanA);
    console.log("Jumlah nama diawali A:", awalanA.length);
    console.log("Nama lebih dari 4 huruf:", lebihDari4);
}

analisisNama();
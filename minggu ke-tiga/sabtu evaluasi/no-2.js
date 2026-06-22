function analisisDokumen(teks, ...tambahan){

    if(!teks){
        return {

            jumlahKarakter: 0,
            jumlahKata: 0,
            jumlahKalimat: 0,
            jumlahAngka: 0,
            angkaTerbesar: 0,
            angkaTerkecil: 0,
            kataTerpanjang: "",
            rataRataPanjangKata: 0
        };
    }

    const jumlahKarakter = teks.length;

    const kata = teks.split(" ");

    const jumlahKata = kata.length;
    
    const kalimat = teks.split(".");

    let jumlahKalimat = 0;

    for(const perubahan of kalimat){
        if(perubahan.trim() !== ""){
            jumlahKalimat++;
        }
    }

const angka = [];

for(const perubahan of kata){
    const hasilAngka = Number(perubahan.replace("%",""));

    if(hasilAngka > 0){
        angka.push(hasilAngka);
        }
    }

    let jumlahAngka = angka.length;

    let angkaTerbesar = 0;
    let angkaTerkecil = 0;

    if(jumlahAngka > 0){
        angkaTerbesar = Math.max(...angka);
        angkaTerkecil = Math.min(...angka);
    
    let kataTerpanjang = "";
    let totalPanjang = 0;

    for(const perubahan of kata){
        const perubahanKata = perubahan.replace(".","");

        totalPanjang = totalPanjang + perubahanKata.length;

        if(perubahanKata.length > kataTerpanjang.length){
            kataTerpanjang = perubahanKata;
        }
    }

    const rataRataPanjangKata = totalPanjang / jumlahKata;

    return {
        jumlahKarakter,
        jumlahKata,
        jumlahKalimat,
        jumlahAngka,
        angkaTerbesar,
        angkaTerkecil,
        kataTerpanjang,
        rataRataPanjangKata: rataRataPanjangKata.toFixed(0)
    };
}
}
console.log(
    analisisDokumen(
        "JavaScript 2026 sangat populer. Pada tahun 2025 pengguna meningkat 35%."
    )
);
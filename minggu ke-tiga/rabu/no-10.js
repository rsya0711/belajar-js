function analisisTeks(teks) {
    let jumlahKarakter = teks.length;
    let jumlahKata = teks.split(" ").length;

    let vokal = 0;
    let konsonan = 0;
    let angka = 0;
    let spasi = 0;
    let simbol = false;

    const hurufVokal = "aiueoAIUEO";

    for (let karakter of teks) {

        if (hurufVokal.includes(karakter)) {
            vokal++;
        }

        else if (
            (karakter >= "a" && karakter <= "z") ||
            (karakter >= "A" && karakter <= "Z")
        ) {
            konsonan++;
        }

        else if (karakter >= "0" && karakter <= "9") {
            angka++;
        }

        else if (karakter === " ") {
            spasi++;
        }

        else {
            simbol = true;
        }
    }

    let kataArray = teks.split(" ");
    let kataTerpanjang = kataArray[0];

    for (let kata of kataArray) {
        if (kata.length > kataTerpanjang.length) {
            kataTerpanjang = kata;
        }
    }

    return {
        jumlahKarakter,
        jumlahKata,
        jumlahHurufVokal: vokal,
        jumlahHurufKonsonan: konsonan,
        jumlahAngka: angka,
        jumlahSpasi: spasi,
        terdapatSimbolKhusus: simbol,
        kataTerpanjang
    };
}
    console.log("Saya adalah pelajar$");
    console.log(
    analisisTeks("Saya adalah pelajar$"));
    console.log("")

    console.log("Dia anak presiden");
    console.log(
    analisisTeks("Dia anak presiden"));
    console.log("");
    
console.log("Mereka Asal Amerika");
    console.log(
    analisisTeks("Mereka Asal Amerika"));

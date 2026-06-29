async function cariCuaca(){

    const kota = document.getElementById("kota").value;

    try{
        const lokasi = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${kota}&count=1`
        );

        const dataLokasi = await lokasi.json();

        const latitude = dataLokasi.results[0].latitude;

        const longitude = dataLokasi.results[0].longitude;

        const cuaca = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);

        const dataCuaca = await cuaca.json();

        const hasil = {
            kota: dataLokasi.results[0].name,
            negara :dataLokasi.results[0].country,
            suhu:dataCuaca.current_weather.temperature,
            angin:dataCuaca.current_weather.windspeed
        };

        tampilkanCuaca(hasil);

    }
    catch(error){
        console.log("Error :", error);
    }
}

function tampilkanCuaca(data){

    document.getElementById("hasil").innerHTML = `

        <h2>
        ${data.kota}, 
        ${data.negara}
        </h2>

        <p>  
        Suhu : ${data.suhu} °C
        </p>

        <p>
        Angin :
        ${data.angin} km/h
        </p>`;
}
function sensorKata() {
    let kata = ["bodoh", "rajin", "malas", "hebat", "jelek"];

    console.log("Sebelum:", kata);

    let indexBodoh = kata.indexOf("bodoh");
    kata.splice(indexBodoh, 1);

    let indexJelek = kata.indexOf("jelek");
    kata.splice(indexJelek, 1);

    console.log("Sesudah:", kata);
}

sensorKata();
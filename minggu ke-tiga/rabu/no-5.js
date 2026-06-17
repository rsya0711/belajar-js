const komentar = "Dasar bodoh! Kamu sangat jelek dan malas.";

console.log(komentar);

const sensor = komentar
    .replace("bodoh", "****")
    .replace("jelek", "****")
    .replace("malas", "****");

console.log(sensor);
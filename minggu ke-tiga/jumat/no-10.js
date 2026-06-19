function hitungTotal(...angka){
    return angka.reduce((total, nilai) => total + nilai, 0);
}

console.log(hitungTotal(10, 20, 30));
console.log(hitungTotal(5, 10, 15, 20, 25));
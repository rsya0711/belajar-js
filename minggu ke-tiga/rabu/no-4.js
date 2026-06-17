const nama = "Muhammad Fikri Baihaqi";

const perubahanNama = nama.split(" ");

const inisial =
    perubahanNama[0][0] + ". " +
    perubahanNama[1][0] + ". " +
    perubahanNama[2][0] + ".";


const kapital = nama.toUpperCase();
const titleCase =
    perubahanNama[0][0].toUpperCase() + perubahanNama[0].slice(1).toLowerCase() + " " +

    perubahanNama[1][0].toUpperCase() + perubahanNama[1].slice(1).toLowerCase() + " " +
    
    perubahanNama[2][0].toUpperCase() + perubahanNama[2].slice(1).toLowerCase();

console.log(inisial);
console.log(kapital);
console.log(titleCase);


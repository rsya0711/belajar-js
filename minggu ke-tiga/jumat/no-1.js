const hero = {
    nama: "GatotKaca",
    kelas: "Tank",
    level: 25,
    hp: 5000,
    mana: 800
};

const {nama, kelas, level, hp, mana} = hero;
const { mana : energi} = hero;

const {guild = "tanpa guild"} = hero;

console.log ("nama :", nama);
console.log ("kelas :", kelas);
console.log ("level :", level);
console.log ("hp :", hp);
console.log ("energi :", energi);
console.log ("guild :", guild)

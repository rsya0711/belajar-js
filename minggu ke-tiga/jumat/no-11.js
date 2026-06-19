const tim = [
    {
        nama: "Ari",
        role: "Tank"
    },
    {
        nama: "Bima",
        role: "Mage"
    },
    {
        nama: "Citra",
        role: "Support"
    }
];

const [
    { nama: namaPertama },
    { role: roleKedua },
    { nama: namaKetiga }
] = tim;

console.log(namaPertama);
console.log(roleKedua);
console.log(namaKetiga);
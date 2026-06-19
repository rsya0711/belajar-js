const user = {
    nama: "Budi",
    umur: 18,
    kota: "Jakarta"
};

const perubahanUser = {
    ...user,
    umur : 19,
    kota : "bandung",
}

console.log (perubahanUser)